"use client";
import { Product } from '@/utils/ProductTypes';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';


interface Props {
    cartItem: Product
}

const CartItemCard = ({ cartItem }: Props) => {

    const [num, setNum] = useState(cartItem.quantity);



    return (
        <div className='flex flex-col sm:flex-row items-center justify-center w-full px-5 py-7 gap-5 border-b border-gray-200'>
            <div className=''>
                <Image src={cartItem.image} alt={cartItem.name} width={250} height={250} className='rounded-md' />
            </div>
            <div className='flex flex-col justify-between items-start w-full'>
                <div className='flex justify-between items-center w-80 sm:w-full flex-initial'>
                    <h4>{cartItem.name}</h4>
                    <button>
                        <Trash size={25} className='cursor-pointer' />
                    </button>
                </div>
                <h5 className='font-semibold my-2 text-gray-400'>{cartItem.subcat}</h5>
                <p className='flex flex-col gap-5 my-1 font-semibold text-base'>
                    Delivery Estimation
                    <span className='text-yellow-500'>5 Working Days</span>
                </p>
                <div className='flex justify-between items-center w-80 sm:w-full flex-initial'>
                    <div>${cartItem.price * cartItem.quantity}</div>
                    <div className='flex justify-center items-center gap-5 text-2xl font-bold mt-8'>
                        <p>Quantity:</p>
                        <button className='flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full'>
                            -
                        </button>
                        {num}
                        <button className='flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full'>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;