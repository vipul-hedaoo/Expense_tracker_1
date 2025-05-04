import React, { useState } from "react";
import { motion } from "framer-motion";

const IncomeProf = () => {
    const [incomeSources, setIncomeSources] = useState([
        { id: 1, name: "Salary", amount: 2500 },
        { id: 2, name: "Freelancing", amount: 800 },
        { id: 3, name: "Investments", amount: 500 },
    ]);

    // Calculate total income
    const totalIncome = incomeSources.reduce((acc, source) => acc + source.amount, 0);

    // Handle income update
    const updateIncome = (id, newAmount) => {
        setIncomeSources((prevSources) =>
            prevSources.map((source) =>
                source.id === id ? { ...source, amount: parseFloat(newAmount) || 0 } : source
            )
        );
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-6">
            <motion.div
                className="bg-white p-6 rounded-lg shadow-lg w-96"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 text-center">Total Income</h2>

                {/* Total Income */}
                <motion.div
                    className="mt-4 text-center text-2xl font-bold text-green-600"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                >
                    Total Income: ${totalIncome.toFixed(2)}
                </motion.div>

                {/* Editable Income Inputs */}
                <div className="mt-4 space-y-3">
                    {incomeSources.map((source) => (
                        <div key={source.id} className="flex justify-between items-center">
                            <span className="text-gray-700">{source.name}</span>
                            <input
                                type="number"
                                value={source.amount}
                                onChange={(e) => updateIncome(source.id, e.target.value)}
                                className="w-24 p-2 border rounded text-right"
                            />
                        </div>
                    ))}
                </div>

                {/* Save Button */}
                <motion.button
                    className="w-full mt-4 bg-colors2 text-white p-2 rounded hover:bg-colors1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Save Changes
                </motion.button>
            </motion.div>
        </div>
    );
};

export default IncomeProf;