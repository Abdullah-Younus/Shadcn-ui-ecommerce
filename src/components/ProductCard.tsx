import Image, { StaticImageData } from 'next/image';
import p1 from '/public/p1.png';
import { FC } from "react";

interface ProductData {
    title: string,
    price: number,
    img: StaticImageData
}

export const ProductCard = ({ title, price, img }: ProductData) => {
    return (
        <div>
            <Image src={p1} alt='Picture' />
            <h3 className='font-bold text-lg mt-3'>{title}</h3>
            <p className='font-bold text-lg'>${price}</p>
        </div>
    )
}
