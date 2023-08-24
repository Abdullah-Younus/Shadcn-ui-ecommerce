"use client";

import { Product } from '@/utils/ProductTypes';
import React from 'react'

interface Props {
    products: Product[];
}



const StripeCheckoutButton = () => {

    return (
        <div className='py-5'>
            <button className='bg-[#212121] text-white py-3 px-3 rounded-md'>
                Process to Checkout
            </button>
        </div>
    )
}

export default StripeCheckoutButton;