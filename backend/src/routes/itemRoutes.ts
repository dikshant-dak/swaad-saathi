import cors from 'cors'
import express from 'express'
import { myDataSource } from '../../app-data-source'
import { Items } from '../entity/items.entity'

const router = express.Router()
router.use(cors())
router.post('/additem', async (req, res) => {
  try {
    const newItem = await myDataSource.getRepository(Items).save(req.body)

    res.json(newItem)
  } catch (error) {
    console.error('Error adding item:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
