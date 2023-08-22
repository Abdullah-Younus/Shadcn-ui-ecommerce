import { addToCart, cartTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest, response: NextResponse) => {

    const user_id = "12234adfsadfsafsa";

    const req: addToCart = await request.json();

    try {

        if (req) {
            await db.insert(cartTable).values({
                user_id: user_id,
                product_id: req.product_id,
                product_name: req.product_name,
                quantity: req.quantity,
                subcat: req.subcat,
                image: req.image,
                price: req.price,
                total_price: req.total_price
            }).returning();
            return NextResponse.json({ message: "Cart add to Database" }, { status: 200 })
        } else {
            throw new Error("DB Failed To Cart")
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 404 })
    }
}


export const PUT = async (request: NextRequest, response: NextResponse) => {

    const user_id = "12234adfsadfsafsa";


    const data: addToCart = await request.json();
    try {
        if (data) {
            await db.update(cartTable).set({
                quantity: data.quantity,
                total_price: data.price,
            }).where(and(eq(cartTable.user_id, user_id), eq(cartTable.product_id, data.product_id))).returning();
            return NextResponse.json({ message: "Data Updated SuccessFully" }, { status: 200 });
        }else {
            throw new Error("Error to Update Data");
        }

    } catch (error) {
        console.log(error);
        return  NextResponse.json({ message: error }, { status: 404 })
    }
}