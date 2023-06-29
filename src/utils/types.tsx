import Image, { StaticImageData } from 'next/image';

export type Product = {
    id: number;
    productName: string;
    price: number;
    category: string;
    image:StaticImageData | string;
}