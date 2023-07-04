import Image from 'next/image';
import React from 'react';

const ProductType = () => {
    return (
        <div className='py-16 px-2'>
            <div className='text-center border space-y-3'>
                <p className="text-sm leading-7 [&:not(:first-child)]:mt-6">
                    PROMOTIONS
                </p>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Our Promotions Events
                </h3>
            </div>
            <div className='grid grid-cols-4 gap-5 px-2 text-gray-800 '>
                <div className='w-full col-span-2 px-6 bg-[#d6d6d8]'>
                    <div className='max-w-[13rem] border py-8'>
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            GET UP TO 60%
                        </h4>
                        <p className="text-md leading-7 [&:not(:first-child)]:mt-6">
                            For the summer season
                        </p>
                    </div>
                    <div>
                        <Image src={"/public/p1.png"} alt="product 1" />
                    </div>
                </div>
                <div className='w-full row-span-2 h-full bg-[#efe1c7]'>

                </div>
                <div className='w-full row-span-2 h-full bg-[#d7d7d9]'>

                </div>
                <div className='w-full col-span-2 h-28 bg-[#212121]'>

                </div>
            </div>
        </div>
    )
}

export default ProductType;