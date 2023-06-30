import { products } from "@/utils/mock";
import { ProductCard } from "@/components/ProductCard";
import Image, { StaticImageData } from "next/image";


const getProductDetails = (id: number) => {
    return products.filter((product) => product.id == id);
}



export default function Page({ params }: { params: { id: number } }) {

    const result = getProductDetails(params.id);

    return (
        <div className="flex mt-16 py-10 flex-wrap">
            {result.map((eachItem) => (
                <div key={eachItem.id} className="flex justify-between gap-6">
                    {/* Left Side  */}
                    <div>
                        <Image src={eachItem.image} alt={eachItem.productName} />
                    </div>
                    {/* Right Side  */}
                    <div>
                        <div>
                            <h1 className="text-2xl">{eachItem.productName}</h1>
                            <h2 className="text-base text-gray-400 font-semibold">{eachItem.tagline}</h2>
                        </div>
                        <div>
                            <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
                            <div className="h-6 w-6 border rounded-full hover:shadow-xl mt-2 flex justify-center items-center">
                                <span className="text-xs font-semibold text-center text-gray-600">XS</span>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>

    )
}