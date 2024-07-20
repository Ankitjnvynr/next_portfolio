import { NextResponse } from "next/server";
import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

export async function POST(req) {
    const data = await req.formData();
    const file = data.get('file');
    if (!file) {
        return NextResponse.json({ "message": "No image found", success: false });
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);

    const path = `./public/uploads/${file.name}`;
    const dir = dirname(path);

    try {
        await mkdir(dir, { recursive: true });
        await writeFile(path, buffer);
        return NextResponse.json({ "message": "File uploaded", success: true });
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ "message": "Failed to upload file", success: false });
    }
}