import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const categories = [
    'Housing',
    'Food',
    'Transportation',
    'Utilities',
    'Healthcare',
    'Insurance',
];

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const monthlyData = {
    Housing: [800, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910, 920],
    Food: [200, 180, 160, 150, 140, 180, 210, 230, 190, 170, 160, 150],
    Transportation: [100, 120, 90, 80, 100, 110, 95, 130, 100, 85, 70, 90],
    Utilities: [120, 130, 110, 115, 125, 130, 140, 135, 120, 125, 115, 110],
    Healthcare: [50, 55, 60, 65, 50, 55, 60, 70, 75, 80, 85, 60],
    Insurance: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
};

const generateChartData = (category, visibleMonths) =>
    months.slice(0, visibleMonths).map((month, index) => ({
        name: month,
        value: monthlyData[category]?.[index] || 0,
    }));

const generateTotalExpenseData = (visibleMonths) =>
    months.slice(0, visibleMonths).map((month, idx) => {
        const total = categories.reduce(
            (sum, cat) => sum + (monthlyData[cat]?.[idx] || 0),
            0
        );
        return { name: month, value: total };
    });

const calculateTotal = (visibleMonths) =>
    categories.reduce((sum, cat) => {
        const slice = monthlyData[cat].slice(0, visibleMonths);
        const subtotal = slice.reduce((a, b) => a + (b || 0), 0);
        return sum + subtotal;
    }, 0);

const Stactic = () => {
    const [selectedCategory, setSelectedCategory] = useState('Housing');
    const [visibleMonths, setVisibleMonths] = useState(6);

    return (
        <div>
        <div className="min-h-screen hidden md:block bg-gray-100 py-8 px-4 sm:px-6 lg:px-12">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-center mb-6 text-colors2"
            >
                Expense Statistics Dashboard
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"
            >
                <div>
                    <h2 className="text-lg font-semibold text-colors2">
                        Total Expense for {visibleMonths} month(s):
                    </h2>
                    <p className="text-2xl text-green-500 font-bold">
                        ₹ {calculateTotal(visibleMonths).toLocaleString()}
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <label className="block text-gray-600 font-medium mb-1">
                        Select Months to View: {visibleMonths}
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="12"
                        value={visibleMonths}
                        onChange={(e) => setVisibleMonths(parseInt(e.target.value))}
                        className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
            </motion.div>

            {/* Total Expense Graph */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-4 rounded-xl shadow mb-6"
            >
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    Total Monthly Expense Overview
                </h2>
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={generateTotalExpenseData(visibleMonths)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#14b8a6" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </motion.div>

            {/* Category Graphs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-white p-4 rounded-xl shadow"
                    >
                        <h2 className="text-lg font-semibold text-colors2 mb-2">{cat} Expenses</h2>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={generateChartData(cat, visibleMonths)}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="value" stroke="#0f766e" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </motion.div>
                ))}
            </div>

            {/* Tracker Graph */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white p-4 rounded-xl shadow mt-8"
            >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Monthly Tracker: <span className="text-teal-600">{selectedCategory}</span>
                    </h2>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={generateChartData(selectedCategory, visibleMonths)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </motion.div>
        </div>
            {/*?????*/}
            <div className="md:hidden">
            <div className="h-1/5 w-screen bg-colors2 top-0 rounded-b-3xl m-b-5">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center pt-10 pb-3 text-white "
                >
                    Expense Statistics Dashboard
                </motion.h1>
            </div>
            <div className="min-h-screen flex flex-col bg-gray-100 py-8 px-4 sm:px-6 lg:px-12">

                <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"
                >
                    <div className="mx-auto">
                        <h2 className="text-lg font-semibold text-colors2 ">
                            Total Expense for {visibleMonths} month(s):
                        </h2>
                        <p className="text-2xl text-green-500 font-bold">
                            ₹ {calculateTotal(visibleMonths).toLocaleString()}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="block text-gray-600 font-medium mb-1">
                            Select Months to View: {visibleMonths}
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="12"
                            value={visibleMonths}
                            onChange={(e) => setVisibleMonths(parseInt(e.target.value))}
                            className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                </motion.div>

                {/* Total Expense Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white p-4 rounded-xl shadow mb-6"
                >
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        Total Monthly Expense Overview
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={generateTotalExpenseData(visibleMonths)}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#14b8a6" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Category Graphs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white p-4 rounded-xl shadow"
                        >
                            <h2 className="text-lg font-semibold text-colors2 mb-2">{cat} Expenses</h2>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={generateChartData(cat, visibleMonths)}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="value" stroke="#0f766e" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </motion.div>
                    ))}
                </div>

                {/* Tracker Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white p-4 rounded-xl shadow mt-8"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Monthly Tracker: <span className="text-teal-600">{selectedCategory}</span>
                        </h2>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={generateChartData(selectedCategory, visibleMonths)}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Stactic;
