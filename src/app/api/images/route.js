import multer from 'multer';
import nextConnect from 'next-connect';
import { Image } from '@/lib/model/image';
import { connectionSrt } from '@/lib/db';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

// Set up multer for file upload
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            // Set the destination folder for file uploads
            const uploadDir = path.join(process.cwd(), 'public/uploads');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
            // Use original filename
            cb(null, file.originalname);
        },
    }),
});

// Set up Next.js API route with nextConnect
const handler = nextConnect()
    .use(upload.single('file')) // 'file' is the name of the form field
    .post(async (req, res) => {
        try {
            await mongoose.connect(connectionSrt, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            // File information
            const { originalname, path: filePath } = req.file;
            const { description, title, order } = req.body;

            // Create a new image document
            const image = new Image({
                name: originalname,
                date: new Date(),
                description,
                title,
                order,
            });

            // Save the image document to the database
            await image.save();

            res.status(200).json({ result: true, message: 'File uploaded and details saved' });
        } catch (error) {
            console.error('Error uploading file:', error);
            res.status(500).json({ result: false, error: error.message });
        } finally {
            mongoose.connection.close();
        }
    });

export default handler;
