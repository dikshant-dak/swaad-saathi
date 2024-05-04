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

router.get('/menuOfRestaurant/:id', async (req, res) => {
  const { id } = req.params
  try {
    const menu = await myDataSource.getRepository(Items).find({
      where: {
        restaurantId: id
      },
      relations: ['restaurant']
    })
    console.log('😀😁😀😀', menu)
    res.json(menu)
  } catch (error) {
    console.error('Error fetching menu of this restaurant:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
export default router
