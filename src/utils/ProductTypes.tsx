import { Image } from "sanity";

export interface oneProductType {
    id?: string,
    title: string,
    image: Array<object | string>,
    productTypes: Array<object | string>,
    slug: object,
    _rev: string,
    _type: string,
    quantity: string,
    description: Array<object>,
    size: Array<object | string>,
    price: number,
}


export interface responseType {
    result: Array<oneProductType>
}

/// redux slice interface
export interface Product {
    _id: string;
    name: string;
    price: number;
    totalPrice: number;
    subcat: string;
    image: Array<Image>;
    userId: string;
    quantity: number;
}