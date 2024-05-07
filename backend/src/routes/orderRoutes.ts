import express from "express"
import { myDataSource } from "../../app-data-source"
import { Order } from "../entity/order.entity"

const router = express.Router()

router.get('/orders', async (req, res) => {
  try {
    const orders = await myDataSource.getRepository(Order).find()
    res.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/orders/:id', async (req, res) => {
  try {
    const order = await myDataSource.getRepository(Order).findOne({
      where: {
        id: req.params.id
      }
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
    console.log(req.body)
    const newOrder = await myDataSource.getRepository(Order).save({
      orderDate: req.body.orderDate,
      status: req.body.status,
      totalPrice: req.body.totalPrice,
      deliveryAddress: req.body.deliveryAddress,
      discountAmount: req.body.discountAmount,
      customerId: req.body.customerId,
    })
    const orderItems = req.body.orderItems.map((orderItem:any) => ({
      ...orderItem,
      orderId: newOrder.id
    }))
    // res.json(newOrder)
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
