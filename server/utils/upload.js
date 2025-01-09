import { S3Client } from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3';
import dotenv from 'dotenv';

dotenv.config();

// Configure AWS S3 Client
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: 'us-east-1',
});

// Setup multer storage to directly upload files to S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'ajax-bucket',
    // acl: 'public-read', // Optional: allows the file to be publicly accessible
    key: function (req, file, cb) {
      cb(null, `uploads/${Date.now()}_${file.originalname}`); // Define the file path in the bucket
    },
  }),
});

export default upload;
