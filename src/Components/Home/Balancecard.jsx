import React from "react";
import {FaRupeeSign, FaWallet, FaArrowUp, FaArrowDown, FaUser} from "react-icons/fa";
export default function Balancecard(){
    return (
        <>
            <div className=" md:hidden z-0 fixed top-0 h-1/5 w-full rounded-b-3xl bg-colors2 "></div>
            <div className="z-10 w-full h-1/4 bg-colors2 text-white  rounded-3xl md:w-1/3 md:h-1/6 p-7 m-5 shadow-2xl">

                <span className="text-lg flex my-2">Good Morning <FaUser className="text-xl mx-2" /> Vipul hedaoo</span>
                <span className="text-sm flex">Total Balance<FaWallet className="text-xl mx-2"/></span>
                <div>
                     <div className="flex text-white">
                         <FaRupeeSign className="text-2xl"/>
                         <span className="font-bold text-white text-xl">10000</span>
                     </div>
                 </div>
                <div className=" flex items-center justify-between text-white p-2 my-3 ">
                    <div>
                    <span className="text-sm flex">Total Income<FaArrowDown className="text-xl mx-2"/></span>
                    <div className="flex text-2xl">
                        <FaRupeeSign />
                        <span className="text-white text-xl font-bold">1000</span>
                    </div></div><div>
                    <span className="text-sm flex">Expense<FaArrowUp className="text-xl mx-2"/></span>
                        <div className="flex text-2xl">
                            <FaRupeeSign />
                            <span className="text-white text-xl font-bold">1000</span>
                        </div></div>
                </div>
            </div>
        </>
    )
}