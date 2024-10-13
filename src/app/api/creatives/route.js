import connectDB from "@/lib/connectDB";
import Creative from "@/models/creative";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid"; // Import UUID library

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");
    const title = data.get("title");
    const description = data.get("description");

    await connectDB();

    if (!file) {
      return NextResponse.json({ status: 404, message: "file not found" });
    }

    // Generate a unique file name by appending UUID to the original file name
    const uniqueFileName = `${uuidv4()}-${file.name}`;
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/creatives/${uniqueFileName}`;

    // Save the file to the server
    await writeFile(path, buffer);

    // Save the creative details in the database, using the unique file name
    await Creative.create({ title, description, fileName: uniqueFileName });

    console.log(file);
    console.log("Title:", title);
    console.log("Description:", description);

    return NextResponse.json({ status: 200, message: "Design Uploaded" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error });
  }
}

export async function GET(request) {
  await connectDB();
  const creatives = await Creative.find();
  return NextResponse.json({
    status: 200,
    message: "Designs Retrieved",
    data: creatives,
  });
}
