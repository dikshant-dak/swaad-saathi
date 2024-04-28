import cors from 'cors'
import express from 'express'
import { myDataSource } from '../../app-data-source'
import { City } from '../entity/city.entity'

const router = express.Router()
router.use(cors())

router.get('/cities', async (req, res) => {
  try {
    const cities = await myDataSource.getRepository(City).find()
    res.json(cities)
  } catch (error) {
    console.error('Error fetching cities:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
