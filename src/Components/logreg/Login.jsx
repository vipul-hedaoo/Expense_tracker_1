import React from 'react';
import { motion } from 'framer-motion';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#2F7E79] to-[#4A928D] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl relative"
            >
                {/* Heading */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mt-8">
                    Welcome Back
                </h2>
                <p className="text-sm text-center text-gray-500 mb-6">
                    Please login to your account
                </p>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                        <label className="text-sm text-gray-600 block mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 block mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-colors1 hover:bg-colors2 text-white py-2 rounded-lg font-semibold transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-500">
                    Don’t have an account?{" "}
                    <span className="text-colors1 hover:underline cursor-pointer">
            Register now
          </span>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginPage;
