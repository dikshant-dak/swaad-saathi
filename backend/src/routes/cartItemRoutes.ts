import cors from 'cors'
import express from 'express'
import { myDataSource } from '../../app-data-source'
import { City } from '../entity/city.entity'
import { CartItems } from '../entity/cartItems.entity'

const router = express.Router()
router.use(cors())

router.get('/cartItems', async (req, res) => {
  try {
    const item = await myDataSource.getRepository(CartItems).find({relations: ['items']})
    res.json(item)
  } catch (error) {
    console.error('Error fetching cities:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
