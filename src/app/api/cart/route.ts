import { addToCart, cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest, response: NextResponse) => {
    const user_id = "";

    const req: addToCart = await request.json();

    try {

        if (req) {
            const res = await db.insert(cartTable).values({
                user_id: user_id,
                product_id: req.product_id,
                product_name: req.product_name,
                quantity: req.quantity,
                subcat: req.subcat,
                image: req.image,
                price: req.price,
                total_price: req.total_price
            }).returning();
        }

    } catch (error) {
        console.log(error);
    }
}