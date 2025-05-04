import React from "react";
import { motion } from "framer-motion";
import {Doughnut, Line, Pie} from "react-chartjs-2";
import Balancecard from "./Balancecard.jsx";
import {FaHome, FaPlus, FaUser, FaWallet} from "react-icons/fa"
import {IoBarChartSharp} from "react-icons/io5";
import {ArcElement, Chart as ChartJs, Legend, Tooltip} from "chart.js";
import Downbar from "./Downbar.jsx";
// import {BarChart} from "lucide-react";
ChartJs.register(ArcElement,Tooltip,Legend);
const Dashboard = () => {
    // const data = {
    //     labels: ["Income", "Expenses"],
    //     datasets: [
    //         {
    //             label: "Balance",
    //             data: [1840, 284],
    //             backgroundColor: ["#4CAF50", "#F44336"],
    //         },
    //     ],
    // };
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


    return (
        <div className="md:hidden w-full max-w-md bg-gray-100 p-4 flex flex-col items-center">
            {/* User Profile */}
            {/*<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">*/}
                {/*<h1 className="text-xl font-bold">Good afternoon, Enjelin Morgeana</h1>*/}
                {/*<p className="text-gray-600">Total Balance</p>*/}
                {/*<h2 className="text-3xl font-bold">$2,548.00</h2>*/}

                {/*/!* Income & Expenses Overview *!/*/}
                {/*<div className="flex justify-between mt-4">*/}
                {/*    <div>*/}
                {/*        <p className="text-gray-600">Income</p>*/}
                {/*        <h3 className="text-xl font-bold text-green-500">$1,840.00</h3>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <p className="text-gray-600">Expenses</p>*/}
                {/*        <h3 className="text-xl font-bold text-red-500">$284.00</h3>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Balancecard/>
            {/*</div>*/}

             {/*Chart Section*/}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6 max-w-md max-h-sm bg-white p-4 rounded-lg shadow-lg"
            >
                {/*<Line data={data} options={options} />*/}
                <Doughnut data={data} options={options}/>
            </motion.div>

            {/* Transactions List */}
            <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
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

            {/* Send Again Section */}
            {/*<div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-lg">*/}
            {/*    <h3 className="text-lg font-bold">Send Again</h3>*/}
            {/*    <div className="flex space-x-4">*/}
            {/*        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>*/}
            {/*        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>*/}
            {/*        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="fixed bottom-10 ">
                <button className="bg-colors2 mx-auto rounded-full z-10"><FaPlus className="m-5 text-2xl text-white"/></button>
            </div>
        </div>
    );
};

export default Dashboard;