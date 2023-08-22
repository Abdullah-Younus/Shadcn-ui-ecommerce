"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { cartAction } from "@/redux/features/cartSlice";
import { Product } from "@/utils/ProductTypes";
import { urlForImage } from "../../sanity/lib/image";
import { toast } from "react-hot-toast";


type IProps = {
    product: Product;
    num: number;
    userId: string;
}


const Quantity = (props: IProps) => {

    const dispatch = useDispatch();
    const [num, setNum] = useState(1)

    const getDataFromDB = async () => {
        const res = await fetch(`/api/cart/${props.userId}`)
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        return data;
    }

    const hanldeAddToCart = async () => {
        const res = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
                product_id: props.product._id,
                product_name: props.product.name,
                quantity: num,
                subcat: props.product.subcat,
                image: props.product.image,
                price: props.product.price,
                total_price: props.product.price * num,
            }),
        });
        return res.json();
    };

    const handleCart = async () => {
        try {
            const cartData = await getDataFromDB();
            // console.log('CartData ===>', cartData);
            const existingItem = cartData.cartItems.find((item: any) => item._id === props.product._id);
            console.log('existingItem ===>', existingItem);
            console.log('props.product._id ===>', props.product._id);

            if (existingItem) {
                const newQuantity = existingItem.quantity + num;
                const newTotalPrice = props.product.price * newQuantity;

                const res = await fetch(`/api/cart`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        product_id: props.product._id,
                        quantity: newQuantity,
                        price: newTotalPrice
                    })
                });
                if (!res.ok) {
                    throw new Error("Failed to update Data");
                } else {
                    await hanldeAddToCart()
                }

            }

        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = () => {
        toast.promise(handleCart(), {
            loading: 'Cart Adding.....',
            success: 'Data Add Successfully',
            error: 'Failed to add Data',
        })
        dispatch(cartAction.addToCart({ product: props.product, quantity: num }));

    }

    return (
        <>
            <div className="flex gap-x-4 items-center">
                {/* Miunus   */}
                <button className="border h-7 w-7 rounded-full flex justify-center items-center" onClick={() => setNum(num <= 1 ? 1 : num - 1)}>
                    -
                </button>
                {/* Number   */}
                <span className="text-sm">
                    {num}
                </span>
                {/* Plus   */}
                <button className="border h-7 w-7 rounded-full flex justify-center items-center" onClick={() => setNum(num + 1)}>
                    +
                </button>
            </div>
            <div className="flex justify-center mt-6 items-center gap-x-4">
                <Button className="bg-black h-9 px-8" onClick={addToCart}>Add to Cart</Button>
                <h2 className="text-2xl font-bold">${props.product.price.toFixed(2)}</h2>
            </div>
        </>

    )
}

export default Quantity;
