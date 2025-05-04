import React from "react"
import { motion } from "framer-motion";
import{FaBell} from"react-icons/fa";

const notifications = [
    { id: 1, message: "Your payment to Upwork was successful!", type: "success" },
    { id: 2, message: "Your transfer request was completed.", type: "info" },
    { id: 3, message: "Paypal deposit received: +$1,406.00", type: "success" },
    { id: 4, message: "Youtube subscription renewal: -$11.99", type: "warning" },
];

export default function Notification(){
    return(
        <>
        <div className="min-h-screen md:hidden bg-white font-sans">
            {/* Header */}
            <div className="relative bg-[#2e8c78] h-[200px] rounded-b-3xl text-white">
                {/*<div className="absolute top-6 left-4 text-white text-xl">&lt;</div>*/}
                <h2 className="text-center pt-10 font-semibold text-lg">Notification</h2>
                <div className="absolute top-6 right-4">

                </div>
            </div>
            <div className="mt-4 space-y-3 m-4 ">
                {notifications.map((notif) => (
                    <motion.div
                        key={notif.id}
                        className={`p-3 rounded-md ${notif.type === "success" ? "bg-green-500 text-white"
                            : notif.type === "info" ? "bg-blue-500 text-white"
                                : "bg-yellow-500 text-black"}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaBell className="text-2xl text-white"/>
                        {notif.message}
                    </motion.div>
                ))}
            </div>
</div>
            <div className="hidden md:block w-1/2 mx-auto">

                <div className="mb-16">
                    <span className="text-colors1 font-bold text-2xl mx-auto">Notification</span>
                </div>
                <div className="mt-4 space-y-3 m-4 ">
                    {notifications.map((notif) => (
                        <motion.div
                            key={notif.id}
                            className={`p-3 rounded-md ${notif.type === "success" ? "bg-green-500 text-white"
                                : notif.type === "info" ? "bg-blue-500 text-white"
                                    : "bg-yellow-500 text-black"}`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaBell className="text-2xl text-white"/>
                            {notif.message}
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}