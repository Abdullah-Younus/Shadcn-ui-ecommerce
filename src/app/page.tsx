import Image from 'next/image'
import Hero from '@/views/Hero';
import ProductList from '@/views/ProductList';
import ProductType from '@/views/ProductTypes';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductType/>
      {/* <ProductList/> */}
    </div>
  )
}
