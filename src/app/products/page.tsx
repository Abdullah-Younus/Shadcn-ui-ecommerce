import { ProductCard } from "@/components/ProductCard";
import { products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";

function AllProducts() 
{
    return (
        <div>
            <div className='flex justify-evenly flex-wrap mt-16 gap-y-5'>
                {products.map((eachItem) => (
                    <ProductCard
                        key={eachItem.id}
                        productName={eachItem.productName}
                        price={eachItem.price}
                        image={eachItem.image as StaticImageData}
                        category={eachItem.category}
                        id={eachItem.id}
                        tagline={eachItem.tagline}
                    />
                ))}
            </div>
        </div>
    )
}

export default AllProducts;