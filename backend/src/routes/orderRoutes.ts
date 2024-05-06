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
  const {
    orderDate,
    requiredDate,
    status,
    customerNumber,
    totalPrice,
    deliveryAddress,
    paymentMethod,
    paymentStatus
  } = req.body

  if (
    !orderDate ||
    !requiredDate ||
    !status ||
    !customerNumber ||
    !totalPrice ||
    !deliveryAddress ||
    !paymentMethod ||
    !paymentStatus
  ) {
    return res.status(400).json({ error: 'Please provide all required fields' })
  }

  try {
    const newOrder = await myDataSource.getRepository(Order).create(req.body)
    const savedOrder = await myDataSource.getRepository(Order).save(newOrder)
    res.status(201).json(savedOrder)
  } catch (error) {
    console.error('Error creating order:', error)
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
