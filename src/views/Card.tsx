
import { FC } from "react";
import { oneProductType } from "@/utils/ProductTypes";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'
import { client } from "@/lib/sanityClient";
import PortableText from "react-portable-text";


const builder = imageUrlBuilder(client);

const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {

    function urlFor(source: any) {
        return builder.image(source);
    }
    return (
        <div className="max-w-sm min-w-[24rem] space-y-3">
            <div className="w-full">
                <Image src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt="Logo" width={500} height={500} />
            </div>
            <div className="space-y-1 text-gray-600 font-semibold text-lg">
                <h6>{singleProductData.title}</h6>
                <PortableText className="text-sm font-normal" content={singleProductData.description} />
                <p>${singleProductData.price}</p>
            </div>
        </div>
    )
}

export default Card;