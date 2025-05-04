import React from "react"
import {FaHome,FaWallet,FaUser} from "react-icons/fa"
import{IoBarChartSharp} from "react-icons/io5"
export default function Navbar(){
    return(
        <div>
            <div className="hidden md:flex flex-row w-full items-center mt-5 pb-3">
                <div className="mx-10">
                    <div className="text-sm text-colors2 ">Good Morning</div>
                    {/*replace this with the logic text */}
                    <span className="font-bold text-colors2">vipul hedaoo</span>
                </div>
                {/*icon of navbar*/}
                <div className="mt-3 flex ml-auto text-gray-600 text-3xl  ">
                    <FaHome className="hover:scale-95 mx-10 shadow-2xl transition duration-300 hover:text-colors1"/>
                    <FaWallet className="hover:scale-95 mx-10 shadow-2xl transition duration-300 hover:text-colors1"/>
                    <IoBarChartSharp className="hover:scale-95 mx-10 shadow-2xl transition duration-300 hover:text-colors1"/>
                    <FaUser className="hover:scale-95 shadow-2xl mx-10 transition duration-300 hover:text-colors1"/>
                </div>
            </div>
        </div>
    )
}