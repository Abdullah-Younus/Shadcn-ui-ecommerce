
import { FC } from "react";
import { oneProductType } from "@/utils/ProductTypes";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'
import { client } from "@/lib/sanityClient";


const builder = imageUrlBuilder(client);

const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {

    function urlFor(source: any) {
        return builder.image(source);
    }
    return (
        <div className="border-4">
            <div>
                <Image src={urlFor(singleProductData.image[0]).width(500).url()} alt="Logo" width={200} height={200} />
            </div>
            <div></div>
        </div>
    )
}

export default Card;