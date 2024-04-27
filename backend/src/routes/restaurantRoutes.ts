import express from "express";
import { myDataSource } from "../../app-data-source";
import { Restaurant } from "../entity/restaurant.entity";
import cors from 'cors';

const router = express.Router();
router.use(cors())
router.get('/restaurant/:id', async (req, res) => {

    try {
        const restaurant = await myDataSource.getRepository(Restaurant).find({
            where: {
                cityId: req.params.id
            },
            relations: ["city"]
        });
        res.json(restaurant);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;