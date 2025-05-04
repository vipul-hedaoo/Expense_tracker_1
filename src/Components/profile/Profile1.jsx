import React, {useState} from "react"
import {motion} from "framer-motion";
import {FaBell, FaHome, FaUser, FaWallet,} from "react-icons/fa"
import {IoBarChartSharp, IoLogIn} from "react-icons/io5";
import Navbar from "../Home/Navbar.jsx";
import {FiLogIn, FiLogOut} from "react-icons/fi";
import DexProfile from "./DexProfile.jsx";
export default function Profile1(){
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <>
            <div className="min-h-screen md:hidden bg-white font-sans">
                {/* Header */}
                <div className="relative bg-[#2e8c78] h-[200px] rounded-b-3xl text-white">
                    {/*<div className="absolute top-6 left-4 text-white text-xl">&lt;</div>*/}
                    <h2 className="text-center pt-10 font-semibold text-lg">Profile</h2>
                    <div className="absolute top-6 right-4">

                    </div>
                </div>

                {/* Avatar & Name */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center -mt-16"
                >
                    <img
                        // src="/avatar.png" // Replace with your avatar image
                        alt="avatar"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                    />
                    <h3 className="mt-3 font-semibold text-gray-800 text-lg">
                        Vipul Hedaoo
                    </h3>
                    <p className="text-sm text-[#2e8c78]">Hedaoovipul@gmail.com</p>
                </motion.div>

                {/* Profile List */}
                <div className="mt-8 space-y-4 px-6">

                    <motion.div
                        className="flex flex-col items-start p-4 bg-white"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        // className="flex flex-col items-center -mt-16"
                    >

                        <div className="my-3 text-gray-600 rounded-xl w-full border bg-white p-3 flex items-center shodow-2xl hover:scale-95 transition duration-300">
                            <FaUser className="text-2xl "/>
                            <span className="font-bold text-colors1 p-3 fonts-bold text-xl my-auto">Profile</span>
                        </div>
                        <div className="my-3 text-gray-600 rounded-xl w-full border bg-white p-3 flex items-center shodow-2xl hover:scale-95 transition duration-300">
                            <FaWallet className="text-2xl "/>
                            <span className="font-bold text-colors1 p-3 fonts-bold text-xl my-auto">Income Setting</span>
                        </div>
                        <div className="my-3 text-gray-600 rounded-xl w-full border bg-white p-3 flex items-center shodow-2xl hover:scale-95 transition duration-300">
                            <FaBell className="text-2xl "/>
                            <span className="font-bold text-colors1 p-3 fonts-bold text-xl my-auto">Notification</span>
                        </div>
                        <div className="my-3 text-gray-600 rounded-xl w-full border bg-white p-3 flex items-center shodow-2xl hover:scale-95 transition duration-300">
                            {isLoggedIn ? (
                                <>
                                    <FiLogOut className="text-2xl" /> <span className="font-bold text-colors1 p-3 fonts-bold text-xl my-auto">Logout</span>
                                </>
                            ) : (
                                <>
                                    <FiLogIn className="text-2xl" /> <span className="font-bold text-colors1 p-3 fonts-bold text-xl my-auto">Login</span>
                                </>
                            )}

                        </div>

                    </motion.div>
                </div>
                <div className="w-full  fixed  bottom-0 mb-5 flex item-center justify-around text-gray-600 text-3xl  ">
                    <FaHome className="hover:scale-95  shadow-2xl transition duration-300 hover:text-colors1"/>
                    <FaWallet className="hover:scale-95  shadow-2xl transition duration-300 hover:text-colors1"/>
                    <IoBarChartSharp className="hover:scale-95 shadow-2xl transition duration-300 hover:text-colors1"/>
                    <FaUser className="hover:scale-95 shadow-2xl transition duration-300 hover:text-colors1"/>
                </div>
            </div>
            <div className="hidden md:block">
                {/*<Navbar/>*/}
                <div>
                   <DexProfile/>
                </div>
            </div>

        </>
    )
}