import Image from 'next/image'
import Hero from '@/views/Hero';
import ProductList from '@/views/ProductList';
import ProductType from '@/views/ProductTypes';
import BASE_PATH_FORAPI from '@/components/shared/BaseUrl';
import ProductCarousel from '@/views/ProductCarousal';
import { Image as IImage } from 'sanity';


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

export const fetchAllProductsData = async () => {

  const res = await fetch(`${BASE_PATH_FORAPI}/api/products`)

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }
  return res.json();
}


export default async function Home() {

  const data: IProduct[] = await fetchAllProductsData()
  console.log(data);
  return (
    <div>
      <Hero />
      <ProductType />
      <ProductCarousel ProductData={data} />
      {/* <ProductList/> */}
    </div>
  )
}

