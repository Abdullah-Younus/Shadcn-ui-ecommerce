import Image, { StaticImageData } from 'next/image';
import p1Image from '/public/p1.png';
import { FC } from "react";
import { Button } from "@/components/ui/button"
import { Product } from '@/utils/types';
interface ProductData {
    title: string,
    price: number,
    img: StaticImageData | string
}

export const ProductCard = ({ productName, price, image, category }: Product) => {
    return (
        <div>
            <Image src={image} alt='Picture' />
            <h3 className='font-bold text-lg mt-3'>{productName}</h3>
            <p className='font-bold text-lg'>${price}</p>
            <p className='font-bold text-lg'>Category :
                <span className='text-base font-normal capitalize'>
                    {category}
                </span>
            </p>

            <Button>Add to Cart</Button>
        </div>
    )
}
