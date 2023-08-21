"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { cartAction } from "@/redux/features/cartSlice";
import { Product } from "@/utils/ProductTypes";


type IProps = {
    product:Product;
    num:number;
}


const Quantity = (props: IProps) => {

    const [num, setNum] = useState(1)
    const dispatch = useDispatch();


    const addToCart = () => {
        dispatch(cartAction.addToCart({ product: props.product, quantity: num }));
    }

    return (
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
    )
}

export default Quantity;
