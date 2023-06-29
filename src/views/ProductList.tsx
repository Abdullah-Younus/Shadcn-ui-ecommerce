import p1 from '/public/p1.png';
import Image, { StaticImageData } from 'next/image';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/utils/mock';
const ProductList = () => {


    return (
        <div className='flex justify-evenly  mt-16'>
            {products.slice(0, 3).map((eachItem) => (
                <ProductCard
                    key={eachItem.id}
                    productName={eachItem.productName}
                    price={eachItem.price}
                    image={eachItem.image}
                    category={eachItem.category}
                    id={eachItem.id} />
            ))}
        </div>
    )
}

export default ProductList;