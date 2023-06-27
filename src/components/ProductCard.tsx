import Image from "next/image";
import p1 from '/public/p1.png';

export const ProductCard = () => {
    return (
        <div>
            <Image src={p1} alt='Picture' />
            <h3 className='font-bold text-lg mt-3'>Flex Sweater</h3>
            <p className='font-bold text-lg'>$104</p>
        </div>
    )
}
