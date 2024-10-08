import { NextResponse } from "next/server";

export default function GET (){
    return NextResponse.json({
        "name":true
    })
}