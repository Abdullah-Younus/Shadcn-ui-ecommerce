import Image from 'next/image'
import Hero from '@/views/Hero';
import ProductList from '@/views/ProductList';
import ProductType from '@/views/ProductTypes';
import BASE_PATH_FORAPI from '@/components/shared/BaseUrl';
import ProductCarousel from '@/views/ProductCarousal';
import { Image as IImage } from 'sanity';
import { client } from '@/lib/sanityClient';


// export const getProductData = () => {
//   // try {
//   //   const res = await fetch(`https://shadcn-ui-ecommerce.vercel.app/api/products`)

//   //   if (!res.ok) {
//   //     throw new Error("Failed to fetch")
//   //   }
//   //   return res.json();

//   // } catch (error) {
//   //   console.log('Error ===>', error);
//   //   throw error; // Propagate the error further
//   // }
//   return "hi"
// }

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']`)
  return res
}

interface IProduct {
  title: string,
  _id: string,
  description: string,
  image: IImage,
  price: number,
  category: {
    name: string
  }
}

export default async function Page() {

  const data: IProduct[] = await getProductData();
  console.log(data);
  return (
    <div>
      <Hero />
      <ProductType />
      <ProductCarousel />
      {/* <ProductList/> */}
    </div>
  )
}

