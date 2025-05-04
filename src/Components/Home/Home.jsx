import Raect from "react"
import Dashboard from "./Dashboard.jsx";
import Navbar from "./Navbar.jsx";
import Balancecard from "./Balancecard.jsx";
import {Doughnut} from "react-chartjs-2";
import {motion} from "framer-motion";
import React from "react";
import {FaPlus} from "react-icons/fa";

export default function Home(){
    const data = {
        labels: ["Income", "Expenses", "Savings"],
        datasets: [
            {
                data: [50, 30, 20], // Percentage values
                backgroundColor: ["#4CAF50", "#F44336", "#FFD700"],
                hoverBackgroundColor: ["#45A049", "#D32F2F", "#FFC107"],
                // BorderColour:["#45A049", "#D32F2F", "#FFC107"],
                // BorderWidth:2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                enabled: true,
            },
        },
    };
    return(
        <div>
            <div className="visible md:hidden">
                <Dashboard/>
            </div>
            <div className="hidden md:block">
                {/*<Navbar/>*/}
                <div className="flex">
                        <Balancecard/>
                    <div className="flex mx-auto lg:flex-row flex-col">
                        <div className="bottom-10 my-auto ">
                            <button className="bg-colors2 mx-auto rounded-full z-10"><FaPlus className="m-5 text-2xl text-white"/></button>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mt-6 mix-w-md w-full bg-white p-4 rounded-lg shadow-lg"
                        >
                            {/*<Line data={data} options={options} />*/}
                            <Doughnut data={data} options={options}/>
                        </motion.div>
                        <div className="mt-6 w-screen max-w-md bg-white p-4 rounded-lg shadow-lg">
                            <h3 className="text-lg font-bold">Transactions History</h3>
                            <ul>
                                <li className="flex justify-between py-2">
                                    <span>Upwork</span>
                                    <span className="text-green-500">+$850.00</span>
                                </li>
                                <li className="flex justify-between py-2">
                                    <span>Transfer</span>
                                    <span className="text-red-500">-$85.00</span>
                                </li>
                                <li className="flex justify-between py-2">
                                    <span>Paypal</span>
                                    <span className="text-green-500">+$1,406.00</span>
                                </li>
                                <li className="flex justify-between py-2">
                                    <span>Youtube</span>
                                    <span className="text-red-500">-$11.99</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}