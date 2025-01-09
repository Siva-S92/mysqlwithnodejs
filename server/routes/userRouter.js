// routes/userRouter.js
import express from 'express';
import { createUser, getAllUsers, getUserById } from '../controllers/user';
const router = express.Router();


// Define routes and link to controller actions
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);

export const userRouter = router;
