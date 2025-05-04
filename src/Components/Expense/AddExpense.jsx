import React, { useState } from "react";
import { motion } from "framer-motion";
import {FaCalendarAlt, FaPlusCircle, FaRupeeSign} from "react-icons/fa";
import Balancecard from "../Home/Balancecard.jsx";
// import AddExpenseD from "./AddExpenseD.jsx";

const AddExpense = () => {
    const [form, setForm] = useState({
        name: "Netflix",
        amount: "48.00",
        date: "Tue, 22 Feb 2022",
        description: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const clearAmount = () => {
        setForm({ ...form, amount: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <>
        <div className="min-h-screen md:hidden flex justify-center items-start pt-20 px-4">
            <div className="bg-gradient-to-b from-[#1d7f7f] to-[#0d4d4d] rounded-b-3xl fixed h-1/3 w-full top-0 z-0">
                <h2 className="text-xl font-bold text-center mb-4 text-white my-16 ">Add Expense</h2>
            </div>
            <motion.div
                initial={{ y:80, opacity: 0 }}
                animate={{ y:20, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full z-10 max-w-md bg-white rounded-3xl p-6 shadow-2xl my-10 text-colors1"
            >
                {/* Header */}


                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* NAME */}
                    <div>
                        <label className="block text-sm text-colors1 mb-1">NAME</label>
                        <div className="flex items-center space-x-3">
                            {/*<img src="/netflix.png" alt="Netflix" className="w-8 h-8 rounded-full" />*/}
                            <input
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colors2"
                            />
                        </div>
                    </div>

                    {/* AMOUNT */}
                    <div>
                        <label className="block text-sm mb-1">AMOUNT</label>
                        <div className="flex items-center">
                            <span className="px-3 py-2 border rounded-l-lg bg-gray-100">$</span>
                            <input
                                name="amount"
                                type="text"
                                value={form.amount}
                                onChange={handleChange}
                                className="flex-1 px-4 py-2 border-t border-b border-r rounded-r-lg focus:ring-2 focus:ring-colors2"
                            />
                            <button
                                type="button"
                                onClick={clearAmount}
                                className="ml-2 text-sm text-white bg-colors2 mx-5 p-2 rounded-2xl hover:underline"
                            >
                                Clear
                            </button>
                        </div>
                    </div>

                    {/* DATE */}
                    <div>
                        <label className="block text-sm mb-1">DATE</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colors2"
                            />
                            <FaCalendarAlt className="absolute top-1/2 right-3 transform -translate-y-1/2" />
                        </div>
                    </div>

                    {/* INVOICE */}
                    <div>
                        <label className="block text-sm text mb-1">INVOICE</label>
                        <div className="border border-dashed border-colors2 rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer">
                            <span className="text-sm">Add Invoice</span>
                            <FaPlusCircle />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-colors1 hover:bg-colors2 hover:scale-95 text-white py-2 rounded-lg font-semibold transition duration-300"
                    >
                        Save Expense
                    </button>
                </form>
            </motion.div>
        </div>


            <div className="hidden md:block">
                <div className="min-h-screen pt-20 px-4">
                    <div>
                    <h2 className="text-2xl font-bold text-center text-colors2 my-5 ">Add Expense</h2>
                    </div>
                    <div className="flex justify-around items-center">
                        <Balancecard/>

                    <motion.div
                        initial={{ y:80, opacity: 0 }}
                        animate={{ y:20, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-1/2 z-10 max-w-md bg-white rounded-3xl p-6 shadow-2xl my-10 text-colors1"
                    >
                        {/* Header */}


                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* NAME */}
                            <div>
                                <label className="block text-sm text-colors1 mb-1">NAME</label>
                                <div className="flex items-center space-x-3">
                                    {/*<img src="/netflix.png" alt="Netflix" className="w-8 h-8 rounded-full" />*/}
                                    <input
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colors2"
                                    />
                                </div>
                            </div>

                            {/* AMOUNT */}
                            <div>
                                <label className="block text-sm mb-1">AMOUNT</label>
                                <div className="flex items-center">
                                    <span className="px-3 py-3 border rounded-l-lg bg-colors1 text-white"><FaRupeeSign/></span>
                                    <input
                                        name="amount"
                                        type="text"
                                        value={form.amount}
                                        onChange={handleChange}
                                        className="flex-1 px-4 py-2 border-t border-b border-r rounded-r-lg focus:ring-2 focus:ring-colors2"
                                    />
                                    <button
                                        type="button"
                                        onClick={clearAmount}
                                        className="ml-2 text-sm text-white bg-colors2 mx-5 p-2 rounded-2xl hover:underline"
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>

                            {/* DATE */}
                            <div>
                                <label className="block text-sm mb-1">DATE</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="date"
                                        value={form.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colors2"
                                    />
                                    <FaCalendarAlt className="absolute top-1/2 right-3 transform -translate-y-1/2" />
                                </div>
                            </div>

                            {/* INVOICE */}
                            <div>
                                <label className="block text-sm text mb-1">INVOICE</label>
                                <div className="border border-dashed border-colors2 rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer">
                                    <span className="text-sm">Add Invoice</span>
                                    <FaPlusCircle />
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-colors1 hover:bg-colors2 hover:scale-95 text-white py-2 rounded-lg font-semibold transition duration-300"
                            >
                                Save Expense
                            </button>
                        </form>
                    </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddExpense;
