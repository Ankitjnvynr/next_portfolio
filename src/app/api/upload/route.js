import { NextResponse } from "next/server";
import { writeFile, mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { nanoid } from 'nanoid';
import mongoose from 'mongoose';
import { connectionSrt } from '@/lib/db';
import { Image } from '@/lib/model/image';

export async function POST(req) {
    const data = await req.formData();
    const file = data.get('file');
    if (!file) {
        return NextResponse.json({ message: "No image found", success: false });
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);

    // Generate a unique name for the image
    const ext = file.name.split('.').pop();
    const newFileName = `${nanoid()}.${ext}`;
    const path = `./public/uploads/${newFileName}`;
    const dir = dirname(path);

    try {
        // Create the directory if it doesn't exist
        await mkdir(dir, { recursive: true });

        // Write the file to the filesystem
        await writeFile(path, buffer);

        // Connect to the database
        await mongoose.connect(connectionSrt, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Store the image name in the database
        const newImage = new Image({ fileName: newFileName });
        await newImage.save();

        // Close the database connection
        mongoose.connection.close();

        return NextResponse.json({ message: "File uploaded and stored in database", success: true });
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ message: "Failed to upload file", success: false });
    }
}
