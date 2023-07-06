import { FC } from "react";
interface IProduct {
    id?: string,
    title: string,
    image: Array<object | string>,
    productTypes: Array<object | string>,
    slug: object,
    quantity: string,
    description: Array<object | string>,
    size: Array<object | string>,
    price: string
}

function ProductCarousel() {
    return (
        <div>Product Carousel</div>
    )
}

export default ProductCarousel;