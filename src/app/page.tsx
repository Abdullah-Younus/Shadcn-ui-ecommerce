import Image from 'next/image'
import Hero from '@/views/Hero';
import ProductList from '@/views/ProductList';
import ProductType from '@/views/ProductTypes';
import BASE_PATH_FORAPI from '@/components/shared/BaseUrl';
import ProductCarousel from '@/views/ProductCarousal';
import { Image as IImage } from 'sanity';
import { client } from '@/lib/sanityClient';


const getProductData = async () => {
  try {
    const res = await fetch(`https://shadcn-ui-ecommerce.vercel.app/api/products`)

    if (!res.ok) {
      throw new Error("Failed to fetch")
    }
    return res.json();

  } catch (error) {
    console.log('Error ===>', error);
    throw error; // Propagate the error further
  }
}





export default async function Page() {

  const data = await getProductData();
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

