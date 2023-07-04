"use client"
import { useState } from 'react';
import Link from 'next/link';
import weblogo from '/public/Logo.jpg';
import Image from 'next/image';
import { Menu, ShoppingCart } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { navBarArray, NavbarType } from '@/utils/NavbarTypes';
import { Search } from 'lucide-react';
import { PanelTopOpen } from 'lucide-react';
import DropdownMenu from '@/views/subcatergory/DropdownMenu';
import { XCircle } from 'lucide-react';
// import MobileMenu from '@/views/subcatergory/MobileMenu';
import Expand from '@/views/subcatergory/Expand';


const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [cartItem, setCartItem] = useState<number>(0);

    return (
        <div>
            <div className='py-6 flex justify-between items-center backdrop-blur-lg space-x-12'>
                <div className='w-36 flex-shrink-0'>
                    <Link href={"/"}>
                        <Image src={weblogo} alt='logo' width={500} height={500} />
                    </Link>
                </div>
                <div className='hidden lg:flex justify-between items-center w-full'>
                    <ul className='flex space-x-4 font-semibold text-lg'>
                        {navBarArray.map((eachItem: NavbarType, index: number) => (
                            <li key={eachItem.id} className='flex items-center relative rounded-sm gap-x-3 px-3 py-1 hover:bg-gray-100 group'>
                                <Link href={eachItem.href}>
                                    {eachItem.label}
                                </Link>
                                {
                                    eachItem.isDropDown ?
                                        <div >
                                            <PanelTopOpen className='w-4 h-4 -rotate-180 group-hover:rotate-0 duration-300' />
                                        </div>
                                        :
                                        ""
                                }
                                {eachItem.isDropDown && <div className={`invisible group-hover:visible absolute left-0 top-8 p-2 py-2 px-6 border border-gray-200 text-sm font-light min-w-[7.8rem]`}>
                                    <DropdownMenu item={eachItem} />
                                </div>}

                            </li>
                        ))}
                    </ul>
                    <div className='border flex items-center text-black-600 px-2 rounded-md'>
                        <Search />
                        <input type="text" className='flex-grow pl-3 pr-5 w-80 py-1 w-72 focus:border-white' placeholder='Search Bar' />
                    </div>
                    <div className='flex-shrink-0 relative h-12 w-12 rounded-full bg-gray-200 flex justify-center items-center'>
                        <div className='absolute w-5 h-5 top-1 left-5 py-1.5 flex justify-center items-center bg-red-600 text-base font-normal rounded-full '>
                            <span className='text-white'>{cartItem}</span>
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
                <div onClick={() => setNavbarOpen(!navbarOpen)}>
                    {navbarOpen
                        ?
                        <div className='flex lg:hidden'>
                            <XCircle />
                        </div>
                        :
                        <div className='flex lg:hidden'>
                            <Menu />
                        </div>
                    }
                </div>
            </div>
            {
                navbarOpen && <MobileMenu />
            }
        </div>
    )
}

export default Header;

const MobileMenu = () => {

    return (
        <div className="w-full px-6 py-4 bg-gray-100">
            {
                navBarArray.map((eachItem: NavbarType, index: number) => {
                    return (
                        <div key={index}>
                            <Expand eachItem={eachItem} />
                        </div>
                    )
                })
            }
        </div>

    )
}
