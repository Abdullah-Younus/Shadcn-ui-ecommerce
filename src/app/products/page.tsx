import { ProductCard } from "@/components/ProductCard";
import { products } from "@/utils/mock";
import Image,{StaticImageData} from "next/image";
const AllProducts = () => {
  return (
    <div>
        <div className='flex justify-evenly flex-wrap mt-16 gap-y-5'>
            {products.map((eachItem) => (
                <ProductCard
                    key={eachItem.id}
                    title={eachItem.productName}
                    price={eachItem.price}
                    img={eachItem.image as StaticImageData}
                />
            ))}
        </div>
    </div>
  )
}

export default AllProducts;