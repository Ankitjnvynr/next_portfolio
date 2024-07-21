import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionSrt } from "@/lib/db";
import { Image } from "@/lib/model/image";

export async function GET() {
    try {
        await mongoose.connect(connectionSrt, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const data = await Image.find();
        console.log(data);

        return NextResponse.json({ result: true, data });
    } catch (error) {
        console.error("Database connection error:", error);
        return NextResponse.json({ result: false, error: error.message }, { status: 500 });
    } finally {
        mongoose.connection.close();
    }
}
