export interface NavbarType {
    id: number,
    label: string,
    href: string,
    isDropDown: boolean,
    dropDownData?: any
};

export const navBarArray: Array<NavbarType> = [
    {
        id: 1,
        label: "Female",
        href: "/category/female",
        isDropDown: false,
    },
    {
        id: 2,
        label: "Male",
        href: "/category/male",
        isDropDown: false,
    },
    {
        id: 3,
        label: "Kids",
        href: "/category/kids",
        isDropDown: false,
    },
    {
        id: 4,
        label: "All Products",
        href: "/products",
        isDropDown: false,
    },
]