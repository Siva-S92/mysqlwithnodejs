import express from 'express';
import { createNewContent, getAllContents } from '../controllers/content.js';
import upload from '../utils/upload.js';


const router = express.Router();

  
// Define your route with multer middleware
router.post("/create-post", upload.single('file'), createNewContent)
router.get("/get-posts", getAllContents)


export const contentRouter = router;