import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import { dotenvPath } from '../var/dotenv.path.js';
dotenv.config({ path: dotenvPath });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
  secure: true
})

export default cloudinary;