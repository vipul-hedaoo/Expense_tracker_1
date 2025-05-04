import React from "react"
import {FaHome, FaUser, FaWallet} from "react-icons/fa";
import {IoBarChartSharp} from "react-icons/io5";

export default function Downbar()
{
    return(
        <>
            <div className="w-full fixed md:hidden bottom-0 pb-5 flex item-center justify-around text-gray-600 text-3xl  ">
                <FaHome className="hover:scale-95  shadow-2xl transition duration-300 hover:text-colors1"/>
                <FaWallet className="hover:scale-95  shadow-2xl transition duration-300 hover:text-colors1"/>
                <IoBarChartSharp className="hover:scale-95 shadow-2xl transition duration-300 hover:text-colors1"/>
                <FaUser className="hover:scale-95 shadow-2xl transition duration-300 hover:text-colors1"/>
            </div>
        </>
    )
}
