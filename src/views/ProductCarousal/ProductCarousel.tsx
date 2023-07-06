import { oneProductType } from "@/utils/ProductTypes";
import { FC } from "react";
import Card from "../Card";

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

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }: any) => {

    // console.log('data ==>', ProductData)
    return (
        <div>
            {ProductData.map((eachItem: oneProductType, index: number) => (
                <div key={index}>
                    <Card singleProductData={eachItem} />
                </div>
            ))}
        </div>
    )
}

export default ProductCarousel;