import { ProductCard } from "@/components/ProductCard";
import { BASE_PATH_FORAPI } from "@/components/shared/BaseUrl";
import { products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";
import { Product } from '@/utils/ProductTypes';


const getAllProducts = async () => {

    const res = await fetch(`${BASE_PATH_FORAPI}/api/products`, {
        method: 'GET'
    });

    return res.json();
}



async function AllProducts() {

    const { data } = await getAllProducts();



    return (
        <div>
            <div className='flex justify-between flex-wrap mt-16 gap-y-12'>
                {data.map((eachItem: Product) => (
                    <ProductCard
                        key={eachItem._id}
                        name={eachItem.name}
                        price={eachItem.price}
                        image={eachItem.image as StaticImageData}
                        category={eachItem.category}
                        _id={eachItem._id}
                        id={eachItem._id}
                        tagline={eachItem.tagline}
                    />
                ))}
            </div>
        </div>
    )
}

export default AllProducts;