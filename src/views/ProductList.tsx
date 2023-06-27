import p1 from '/public/p1.png';
import Image from 'next/image';
import { ProductCard } from '@/components/ProductCard';

const ProductList = () => {


    return (
        <div className='flex justify-evenly mt-16'>
            <ProductCard title="Flex Sweater" price="$16" />
            <ProductCard title="Jeans Flex" price="$16" />
            <ProductCard title="Kurti Sweater" price="$16" />


        </div>
    )
}

export default ProductList;