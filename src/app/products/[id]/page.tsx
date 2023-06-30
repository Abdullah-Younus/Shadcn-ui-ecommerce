import { products } from "@/utils/mock";
import { ProductCard } from "@/components/ProductCard";
import Image, { StaticImageData } from "next/image";


const getProductDetails = (id: number) => {
    return products.filter((product) => product.id === id);
}



export default function Page({ params }: { params: { id: number } }) {

    const result = getProductDetails(params.id);

    return (
        <div className="flex justify-evenly mt-16 py-10 flex-wrap">
            {result.map((eachItem) => (
                <div key={eachItem.id} className="flex justify-between">
                    <div>
                        <Image src={eachItem.image} alt={eachItem.productName} />
                    </div>
                    <div>
                        Product Detailt
                    </div>
                </div>
            ))}
        </div>

    )
}