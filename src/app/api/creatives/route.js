import connectDB from "@/lib/connectDB";
import Creative from "@/models/creative";
import { NextResponse } from "next/server";


export async function POST(request){
    const {title,description,fileName} = await request.json();
    await connectDB();
    await Creative.create({title,description,fileName});
    return NextResponse.json({status:200,message:"Design Uploaded"});
}

export  async function GET(request){
    await connectDB();
    const creatives = await Creative.find();
    return NextResponse.json({status:200,message:"Designs Retrieved",data:creatives});
}
