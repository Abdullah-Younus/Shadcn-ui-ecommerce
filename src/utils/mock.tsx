import { Product } from "./types";
import rightImage from '/public/heroImage.webp';
import pImage from '/public/p1.png'
export const products: Product[] = [
    {
        id: 1,
        productName: "Product One",
        category: "female",
        image: pImage,
        price: 120,
    },
    {
        id: 2,
        productName: "Product Two",
        category: "Male",
        image: pImage,
        price: 130,
    },
    {
        id: 3,
        productName: "Product Three",
        category: "Kids",
        image: pImage,
        price: 190,
    }
]