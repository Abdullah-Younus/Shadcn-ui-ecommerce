import Image, { StaticImageData } from 'next/image';
import { FC } from "react";
import { Button } from "@/components/ui/button"
import { Product } from '@/utils/ProductTypes';
import Link from 'next/link';
import { urlForImage } from '../../sanity/lib/image';
interface ProductData {
    title: string,
    price: number,
    img: StaticImageData | string
}

export const ProductCard = ({ name, price, image, category, _id }: Product) => {

    console.log('Product Image',image);
    return (
        <div className='w-[350px]'>
            <Link href={`/products/${_id}`}> 
                <Image src={urlForImage(image).url()} alt='Picture' width={300} height={300}/>
                <h3 className='font-bold text-lg mt-3'>
                    {name}
                </h3>
                <p className='font-bold text-lg'>
                    ${price}
                </p>
                <p className='font-bold text-lg'>
                    Category :
                    <span className='text-base font-normal capitalize'>
                        {category}
                    </span>
                </p>
                <Button className='mt-5'>Add to Cart</Button>
            </Link>
        </div>

    )
}
