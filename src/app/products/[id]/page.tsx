import { products } from "@/utils/mock";
import { ProductCard } from "@/components/ProductCard";
import Image, { StaticImageData } from "next/image";


export default function Page({ params }: { params: { id: string } }) {

    // const result = getProducts(params.slug);

    return (
        <div>
            <h1>This Page Show By Product Id: {params.id}</h1>
        </div>
        /* {result.length > 0 ? result.map((eachItem) => (
            <ProductCard
                key={eachItem.id}
                productName={eachItem.productName}
                price={eachItem.price}
                image={eachItem.image as StaticImageData}
                category={eachItem.category}
                id={eachItem.id}
            />
        )) : <p>No Products Found</p>} */
    )
}