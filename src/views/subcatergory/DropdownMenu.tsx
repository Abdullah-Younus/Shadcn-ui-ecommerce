import { NavbarType } from "@/utils/NavbarTypes";
import Link from "next/link";
import { FC } from "react";

const DropdownMenu: FC<{ item: NavbarType }> = ({ item }) => {
    return (
        <ul>
            {item.dropDownData?.map((eachItem: NavbarType, index: number) => (
                <li key={index} className="hover:ml-2 duration-300">
                    <Link href={eachItem.href}>
                        {eachItem.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default DropdownMenu;