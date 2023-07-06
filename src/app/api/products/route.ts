import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanityClient";

export async function GET(request: NextRequest) {
    try {
        let data = await client.fetch(`*[_type=='product']`)
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}