import React, {useState} from "react"
import {motion} from "framer-motion";
import IncomeProf from "./IncomeProf.jsx";
import {FiLogIn, FiLogOut} from "react-icons/fi";


export default function DexProfile(){
    const [name, setName] = useState("Your Name");
    const [email, setEmail] = useState("yourname@gmail.com");
    const [mobile, setMobile] = useState("");
    const [location, setLocation] = useState("USA");
    const [doc, setdoc] = useState("2025-05-02");
    const [isLoggedIn, setIsLoggedIn] = useState(true);
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
    return(
        <div className="flex m-5 ">
            <motion.div
                className="bg-white p-6 rounded-lg shadow-lg w-1/2 h-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Profile Image & Basic Info */}
                <span className="font-bold text-lg text-colors2 my-5 mb-3 mx-auto ">Profile</span>
                <div className="flex items-center mb-4 justify-center">
                    <img
                        // src="https://via.placeholder.com/50"
                        alt="Profile"
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">{name}</h2>
                        <p className="text-gray-500">{email}</p>
                    </div>
                </div>

                {/* Editable Fields */}
                <div className="mx-4 mb-3 flex items-center ">
                    <label className="block text-gray-700 w-1/4">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 border rounded w-3/4"
                    />
                </div>
                <div className="mx-4 mb-3 flex items-center">
                    <label className="block text-gray-700 w-1/4">Email account</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 border rounded w-3/4"
                    />
                </div>
                <div className="mx-4 mb-3 flex items-center">
                    <label className="block text-gray-700 w-1/4" >Mobile number</label>
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Add number"
                        className="w-3/4 mt-1 p-2 border rounded"
                    />
                </div>

                <div className="mx-4 mb-3 flex items-center">
                    <label className="block text-gray-700 w-1/4">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-3/4 mt-1 p-2 border rounded"
                    />
                </div>
                <div className="mx-4 mb-3 flex items-center">
                    <label className="block text-gray-700 w-1/4">Date of Creation</label>
                    <input
                        type="text"
                        value={doc}
                        onChange={(e) => setdoc(e.target.value)}
                        className="w-3/4 mt-1 p-2 border rounded"
                    />
                </div>

                {/* Save Button */}
                <motion.button
                    className="w-full bg-colors2 text-white p-2 rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Save Changes
                </motion.button>

            </motion.div>
                <div className="flex flex-col justify-center items-center min-h-screen p-6">
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
                    <div>
                        <button className="my-3 text-gray-600 rounded-xl w-full border bg-white p-3 flex items-center shodow-2xl hover:scale-95 transition duration-300">
                            {isLoggedIn ? (
                                <>
                                    <FiLogOut className="text-2xl" /> <span className="font-bold text-colors1 p-3 fonts-bold text-xl my-auto">Logout</span>
                                </>
                            ) : (
                                <>
                                    <FiLogIn className="text-2xl" /> <span className="font-bold text-colors1 p-3 fonts-bold text-xl my-auto">Login</span>
                                </>
                            )}
                        </button>
                    </div>
            </div>

        </div>
    )
}