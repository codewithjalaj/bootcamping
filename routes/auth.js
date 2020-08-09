import express from 'express';
import { asyncHandler } from '../middlewares/async.js';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));

export default router;
