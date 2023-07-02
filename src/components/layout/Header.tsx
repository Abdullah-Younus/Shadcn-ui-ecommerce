import Link from 'next/link';
import logo from '/public/logo.webp';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { navBarArray, NavbarType } from '@/utils/NavbarTypes';
import { Search } from 'lucide-react';

const Header = () => {
    return (
        <div className='py-6 flex justify-between items-center'>
            <div className='w-36'>
                <Link href={"/"}>
                    <Image src={logo} alt='logo' width={500} height={500} />
                </Link>
            </div>
            <ul className='flex space-x-4 font-semibold text-lg'>
                {navBarArray.map((eachItem: NavbarType, index: number) => (
                    <li key={eachItem.id}>
                        <Link href={eachItem.href}>
                            {eachItem.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='border flex items-center text-black-600 px-2 rounded-md'>
                <Search />
                <input type="text" className='pl-3 pr-5 py-1 w-72 focus:border-white' placeholder='Search Bar' />
            </div>
            <div className='relative h-12 w-12 rounded-full bg-gray-200 flex justify-center items-center'>
                <div className='absolute w-5 h-5 top-1 left-5 py-1.5 flex justify-center items-center bg-red-600 text-base font-normal rounded-full '>
                    <span className='text-white'>3</span>
                </div>
                <ShoppingCart className='h-7 w-7' />
            </div>
            {/* <div className='flex justify-between items-center py-6 px-8'>
                <Link href={"/"}>
                    <Image src={logo} alt='logo' />
                </Link>

                <ul className='flex gap-x-10'>
                    <li className='text-lg'>
                        <Link href={"/category/female"}>
                            Female
                        </Link>
                    </li>
                    <li className='text-lg'>
                        <Link href={"/category/male"}>
                            Male
                        </Link>
                    </li>
                    <li className='text-lg'>
                        <Link href={"/category/kids"}>
                            Kids
                        </Link>
                    </li>
                    <li className='text-lg'>
                        <Link href={"/products"}>
                            All Products
                        </Link>
                    </li>
                </ul>

                <div className='h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
                    <ShoppingCart className='h-6 w-6' />
                </div>
            </div> */}
        </div>

    )
}

export default Header;