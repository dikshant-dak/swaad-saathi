import dotenv from 'dotenv'
import express from 'express'
import Stripe from 'stripe'
import { myDataSource } from '../../app-data-source'
import { CartItems } from '../entity/cartItems.entity'
import { Order } from '../entity/order.entity'
import { OrderItem } from '../entity/orderItems.entity'

dotenv.config()
const stripeSecretKey = process.env.SECRET_STRIPE_KEY || ''
const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-04-10' })

const router = express.Router()

router.get('/orders', async (req, res) => {
  try {
    const orders = await myDataSource
      .getRepository(Order)
      .find({ relations: ['orderItems', 'customer', 'orderItems.items'] })
    res.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.post('/checkout', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Maggi Noodles'
            },
            unit_amount: 8000
          },
          quantity: 1
        }
      ],
      mode: 'payment',

      success_url: 'http://localhost:3000/Success',
      cancel_url: 'http://localhost:3000/Failure'
    })
    res.json({ url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    res.status(500).json({ error: error })
  }
})

router.get('/orders/:id', async (req, res) => {
  try {
    const order = await myDataSource.getRepository(Order).find({
      where: {
        customerId: req.params.id
      },
      relations: ['orderItems', 'orderItems.items']
    })
    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }
    res.json(order)
  } catch (error) {
    console.error('Error fetching order:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.post('/orders', async (req, res) => {
  try {
    const newOrder = await myDataSource.getRepository(Order).save({
      orderDate: req.body.orderDate,
      status: req.body.status,
      totalPrice: req.body.totalPrice,
      deliveryAddress: req.body.deliveryAddress,
      discountAmount: req.body.discountAmount,
      customerId: req.body.customerId
    })
    const orderItems = req.body.orderItems.map((orderItem: any) => ({
      ...orderItem,
      orderId: newOrder.id
    }))
    await myDataSource.getRepository(OrderItem).save(orderItems)

    await myDataSource
      .getRepository(CartItems)
      .delete({ customerId: req.body.customerId })
    res.json(orderItems)
  } catch (error) {
    console.error('Error adding order:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.delete('/orders/:id', async (req, res) => {
  const { id } = req.params

  try {
    const deletedOrder = await myDataSource.getRepository(Order).delete(id)
    if (deletedOrder.affected === 0) {
      return res.status(404).json({ error: 'Order not found' })
    }
    res.status(204).json({ message: 'Order deleted successfully' })
  } catch (error) {
    console.error('Error deleting order:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
