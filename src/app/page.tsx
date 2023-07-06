import Image from 'next/image'
import Hero from '@/views/Hero';
import ProductList from '@/views/ProductList';
import ProductType from '@/views/ProductTypes/ProductType';
import { BASE_PATH_FORAPI } from '@/components/shared/BaseUrl';
import ProductCarousel from '@/views/ProductCarousal/ProductCarousel';
import { Image as IImage } from 'sanity';
import { client } from '@/lib/sanityClient';

async function getProductData() {
  try {
    const res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
    if (!res.ok) {
      throw new Error('Failed to fetch product data');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    // Handle the error appropriately (e.g., show an error message to the user)
  }
}






async function Home() {

  let data = await getProductData();

  console.log('checking',data);
  return (
    <div>
      <Hero />
      <ProductType />
      <ProductCarousel data={data} />
      {/* <ProductList/> */}
    </div>
  )
}

export default Home 