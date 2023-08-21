import { products } from "@/utils/mock";
import { ProductCard } from "@/components/ProductCard";
import Image, { StaticImageData } from "next/image";
import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";


const getProductDetails = (id: number) => {
    return products.filter((product) => product._id == id);
}


const sizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
]

export default function Page({ params }: { params: { id: number } }) {
    
    const result = getProductDetails(params.id);

    return (
        <div className="flex mt-16 py-10 flex-wrap">
            {result.map((eachItem) => (
                <div key={eachItem._id} className="flex justify-between gap-6">
                    {/* Left Side  */}
                    <div>
                        <Image src={eachItem.image} alt={eachItem.name} />
                    </div>
                    {/* Right Side  */}
                    <div>
                        <div>
                            <h1 className="text-2xl">{eachItem.name}</h1>
                            <h2 className="text-base text-gray-400 font-semibold">{eachItem.tagline}</h2>
                        </div>
                        <div>
                            <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>

                            <div className="flex gap-x-5">
                                {sizes.map((size, index) => (
                                    <div key={index} className="flex justify-center items-center h-6 w-6 border rounded-full hover:shadow-xl mt-2">
                                        <span className="text-[11px] font-semibold text-center text-gray-600">{size}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Quantity  */}
                            <div className="flex gap-x-3 mt-6 items-center">
                                <h3 className="text-[10px] font-semibold">Quantity:</h3>
                                {/* <Quantity product={eachItem}/> */}
                            </div>
                            <div className="flex mt-6 items-center gap-x-4">
                                <Button className="bg-black h-9 px-8">Add to Cart</Button>
                                <h2 className="text-2xl font-bold">${eachItem.price.toFixed(2)}</h2>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>

    )
}