import { addToCart, cartTable, db } from "@/lib/drizzle";
import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest, response: NextResponse) => {

    const { user_id }: any = auth();
    // const user_id = "12234adfsadfsafsa";

    const req: addToCart = await request.json();

    try {

        if (req && user_id) {
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

    // const user_id = "12234adfsadfsafsa";
    const { user_id }: any = auth();


    const data: addToCart = await request.json();
    try {
        if (data && user_id) {
            await db.update(cartTable).set({
                quantity: data.quantity,
                total_price: data.price,
            }).where(and(eq(cartTable.user_id, user_id), eq(cartTable.product_id, data.product_id))).returning();
            return NextResponse.json({ message: "Data Updated SuccessFully" }, { status: 200 });
        } else {
            throw new Error("Error to Update Data");
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 404 })
    }
}


export const DELETE = async (request: NextRequest) => {

    // const user_id = "12234adfsadfsafsa";
    const { user_id }: any = auth();

    const Url = request.nextUrl;
    try {
        if (Url.searchParams.has("product_id") && user_id) {
            const product_id = Url.searchParams.get("product_id");
            const res = await db.delete(cartTable).where(and(eq(cartTable.user_id, user_id), eq(cartTable.product_id, product_id as any))).returning();
            return NextResponse.json({ message: "Cart Remove" }, { status: 200 });

        } else {
            if (Url.searchParams.has("product_id")) {
                throw new Error("Login Required");
            } else {
                throw new Error("Product Id Required");
            }
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 404 });
    }

}


