import express from 'express';
import dotenv from 'dotenv';
import { registerController, loginController } from '../controllers/authController';

dotenv.config(); 
const router = express.Router();

router.post('/register', registerController)

router.post('/login', loginController)

// router.post('/logout', logoutController)

export default router;

