import { Product } from "./types";
import p1Image from '/public/p1.png'
import p2Image from '/public/p2.png'
import p3Image from '/public/p3.png'
import p4Image from '/public/p4.png'
import p5Image from '/public/p5.png'


export const products: Product[] = [
    {
        id: 1,
        productName: "Product One",
        category: "female",
        image: p1Image,
        price: 120,
    },
    {
        id: 2,
        productName: "Product Two",
        category: "Male",
        image: p2Image,
        price: 130,
    },
    {
        id: 3,
        productName: "Product Three",
        category: "Kids",
        image: p3Image,
        price: 190,
    },
    {
        id: 4,
        productName: "Product Two",
        category: "Male",
        image: p4Image,
        price: 130,
    },
    {
        id: 5,
        productName: "Product Three",
        category: "Kids",
        image: p5Image,
        price: 190,
    },
    {
        id: 6,
        productName: "Product Two",
        category: "Male",
        image: p5Image,
        price: 130,
    },
    {
        id: 7,
        productName: "Product Three",
        category: "Kids",
        image: p5Image,
        price: 190,
    },
    {
        id: 8,
        productName: "Product Three",
        category: "Kids",
        image: p3Image,
        price: 190,
    },
    {
        id: 9,
        productName: "Product Three",
        category: "Kids",
        image: p1Image,
        price: 190,
    },
]