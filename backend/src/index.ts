import cors from 'cors';
import express from 'express';
import { myDataSource } from "../app-data-source";
import cityRoutes from './routes/cityRoutes';
import customerRoutes from './routes/customerRoutes';
import itemRoutes from './routes/itemRoutes';
import orderRoutes from './routes/orderRoutes';
import restaurantRoutes from './routes/restaurantRoutes';
import cartItemRoutes from './routes/cartItemRoutes';
import authRoutes from './routes/authRoutes';

myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch(err => {
    console.error('Error during Data Source initialization:', err)
  })

const app = express()
const PORT = process.env.PORT || 4000
app.use(cors()) // Use cors middleware

app.use(express.json())

app.use(async (req, res, next) => {
  try {
    next()
    console.log(
      'Connection to the database has been established successfully 🚀🚀'
    )
  } catch (error) {
    console.error('Error connecting to the database:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.use("/", customerRoutes,restaurantRoutes,cityRoutes,itemRoutes, orderRoutes,cartItemRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
