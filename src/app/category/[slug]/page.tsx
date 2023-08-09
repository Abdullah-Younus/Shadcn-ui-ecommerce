import { products } from "@/utils/mock";
import { ProductCard } from "@/components/ProductCard";
import Image, { StaticImageData } from "next/image";

const getProducts = (category: string) => {
    return products.filter((product) => product.category === category);
}


export default function Page({ params }: { params: { slug: string } }) {

    const result = getProducts(params.slug);

    return (
        <div className='flex justify-evenly flex-wrap mt-16 gap-y-5'>
            {result.length > 0 ? result.map((eachItem) => (
                <ProductCard
                    key={eachItem.id}
                    productName={eachItem.productName}
                    price={eachItem.price}
                    image={eachItem.image as StaticImageData}
                    category={eachItem.category}
                    id={eachItem.id}
                    tagline={eachItem.tagline}
                />
            )) : <p>No Products Found</p>}
        </div>
    )
}