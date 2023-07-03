import { NavbarType, navBarArray } from "@/utils/NavbarTypes";
import { PanelTopOpen } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {


    return (
        <div>
            <div className='w-full px-6 py-4 bg-gray-100'>
                {
                    navBarArray.map((eachItem: NavbarType, index: number) => (
                        <li key={index} className="py-2 px-3 hover:bg-purple-600 rounded-md duration-300 list-none flex justify-between">
                            <Link href={eachItem.href}>
                                {eachItem.label}
                            </Link>
                            {eachItem.isDropDown? <PanelTopOpen className='w-4 h-4 -rotate-180 group-hover:rotate-0 duration-300' />:""}
                        </li>

                    ))
                }
            </div>
        </div>

    )
}

export default MobileMenu;