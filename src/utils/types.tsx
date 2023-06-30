import Image, { StaticImageData } from 'next/image';

export type Product = {
    id: number;
    productName: string;
    tagline: string;
    price: number;
    category: string;
    image: StaticImageData | string;
}