"use client";

import CartItemCard from "@/components/CartItemCard";
import StripeCheckoutButton from "@/components/StripeCheckoutButton";
import Wrapper from "@/components/shared/wrapper";
import { useAppSelector } from "@/redux/store";
import { ShoppingBag, ShoppingCart } from "lucide-react";

const CartPage = () => {

    const cartItems = useAppSelector((state) => state.cart.items)
    const totalItems = useAppSelector((state) => state.cart.totalQuantity)
    const totalPrice = useAppSelector((state) => state.cart.totalAmount)

    console.log('CartItems ===>', cartItems);

    if (cartItems.length > 0) {
        console.log("Entering if block with cartItems:", cartItems);
        return (
            <div>

                <Wrapper>
                    <h3>Shopping Cart</h3>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-x-5 px-5">
                        <div className="basis-3/4">
                            {cartItems.map((item: any) => (
                                <CartItemCard key={item._id} cartItem={item} />
                            ))}
                        </div>
                        <div className="basis-1/4 bg-gray-200 rounded-md w-full h-full mt-5 sm:mt-0 p-2 self-start">
                            <div className="flex flex-col items-center justify-between gap-5">
                                <h4>Order Summary</h4>
                                <div className="flex justify-between items-center w-full">
                                    <div>
                                        <p>Quantity</p>
                                    </div>
                                    <div><p>{totalItems}</p></div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div>
                                        <p>Total Amount</p>
                                    </div>
                                    <div><p>${totalPrice}</p></div>
                                </div>
                                <div>
                                    <StripeCheckoutButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>

            </div>

        )
    } else {
        return (
            <Wrapper>
                <h3>Shopping Cart</h3>
                <div className="flex flex-col w-full gap-10 h-full justify-center items-center">
                    <ShoppingBag size={200} />
                    <h1>Your Shopping bag is empty </h1>
                    <ShoppingCart />
                </div>
            </Wrapper>
        )
    }

}

export default CartPage;