import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (request: NextRequest, { params: { userId } }: { params: { userId: string } }) => {
    try {
        if (!userId) {
            throw new Error("User id does not exit");
        } else {
            const res = await db.select().from(cartTable).where(eq(cartTable.user_id, userId));
            return NextResponse.json({ data: res }, { status: 200 });
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 505 });
    }

}