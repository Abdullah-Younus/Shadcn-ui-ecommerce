"use client";

import { useState } from "react";

const Quantity = () => {

    const [num, setNum] = useState(1)

    return (
        <div className="flex gap-x-4 items-center">
            {/* Miunus   */}
            <button className="border h-7 w-7 rounded-full flex justify-center items-center" onClick={() => { setNum(num - 1) }}>
                -
            </button>
            {/* Number   */}
            <span className="text-sm">
                2
            </span>
            {/* Plus   */}
            <button className="border h-7 w-7 rounded-full flex justify-center items-center" onClick={() => { setNum(num + 1) }}>
                +
            </button>
        </div>
    )
}

export default Quantity;
