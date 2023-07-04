import Image from 'next/image';
import React from 'react';

const ProductType = () => {
    return (
        <div className='py-16 px-2'>
            <div className='text-center space-y-3'>
                <p className="text-sm leading-7 [&:not(:first-child)]:mt-6">
                    PROMOTIONS
                </p>
                <h3 className="scroll-m-20 text-3xl font-bold tracking-tight">
                    Our Promotions Events
                </h3>
            </div>
            <div className='grid grid-cols-4 gap-5 px-2 text-gray-800 '>
                <div className='w-full flex col-span-2 px-12 bg-[#d6d6d8]'>
                    <div className='max-w-[13rem] py-8'>
                        <h4 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
                            GET UP TO 60%
                        </h4>
                        <p className="text-xl leading-7 [&:not(:first-child)]:mt-6">
                            For the summer season
                        </p>
                    </div>

                    <div className='w-64'>
                        <Image src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75"} alt="product 1" width={1000} height={1000} />
                    </div>
                </div>
                <div className='w-full row-span-2 h-full bg-[#efe1c7]'>
                </div>
                <div>
                    <p>
                        Flex Sweatshirts
                    </p>
                    <p>
                        $100.00$75.00
                    </p>
                </div>
                <div className='w-72'>

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