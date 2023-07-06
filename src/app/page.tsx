import Image from 'next/image'
import Hero from '@/views/Hero';
import ProductList from '@/views/ProductList';
import ProductType from '@/views/ProductTypes/ProductType';
import { BASE_PATH_FORAPI } from '@/components/shared/BaseUrl';
import ProductCarousel from '@/views/ProductCarousal/ProductCarousel';
import { Image as IImage } from 'sanity';
import { client } from '@/lib/sanityClient';


async function getProductData() {

  let res = await fetch(`${BASE_PATH_FORAPI}/api/products`)
  return res.json();

}





async function Home() {

  let data = await getProductData();

  console.log(data);
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