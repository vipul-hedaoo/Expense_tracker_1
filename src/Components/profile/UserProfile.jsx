import React, { useState } from "react";
import { motion } from "framer-motion";

const UserProfile = () => {
    const [name, setName] = useState("Your Name");
    const [email, setEmail] = useState("yourname@gmail.com");
    const [mobile, setMobile] = useState("");
    const [location, setLocation] = useState("USA");
    const [doc, setdoc] = useState("2025-05-02");

    return (
        <div className="flex justify-center items-center min-h-screen bg-colors1 p-6">
            <motion.div
                className="bg-white p-6 rounded-lg shadow-lg w-96"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Profile Image & Basic Info */}
                <div className="flex items-center mb-4">
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
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mt-1 p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email account</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mt-1 p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Mobile number</label>
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Add number"
                        className="w-full mt-1 p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full mt-1 p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Date of Creation</label>
                    <input
                        type="text"
                        value={doc}
                        onChange={(e) => setdoc(e.target.value)}
                        className="w-full mt-1 p-2 border rounded"
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
        </div>
    );
};

export default UserProfile;