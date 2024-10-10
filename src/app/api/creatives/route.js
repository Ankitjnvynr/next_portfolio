import connectDB from "@/lib/connectDB";
import Creative from "@/models/creative";
import { NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  const data = await request.formData();
file = data.get('file')


  
  await connectDB();
  //await Creative.create({title,description,fileName});
  if(!file){
    return NextResponse.json({status:404,message:"file not found"})
  }
  console.log(fileName);
  
  
  return NextResponse.json({ status: 200, message: "Design Uploaded",file:fileName });
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
