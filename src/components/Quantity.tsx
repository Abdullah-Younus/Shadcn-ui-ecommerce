"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { cartAction } from "@/redux/features/cartSlice";
import { Product } from "@/utils/ProductTypes";
import { urlForImage } from "sanity/lib/image";


type IProps = {
    product: Product;
    num: number;
}


const Quantity = (props: IProps) => {

    const dispatch = useDispatch();
    const [num, setNum] = useState(1)

    const hanldeAddToCart = async () => {
        const res = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
                product_id: props.product._id,
                product_name: props.product.name,
                quantity: num,
                subcat: props.product.subcat,
                image: urlForImage(props.product.image).url(),
                price: props.product.price,
                total_price: props.product.price,
            })
        })
    }

    const addToCart = () => {
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
