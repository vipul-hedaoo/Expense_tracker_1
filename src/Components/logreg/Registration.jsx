import React, {useState} from 'react';
import { motion } from 'framer-motion';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact:'',
        password: '',
        confirmPassword: '',
    });

    const { name, email,contact, password, confirmPassword } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isPasswordMatch = password && confirmPassword && password === confirmPassword;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isPasswordMatch) {
            console.log('Form submitted:', formData);
            // API call or navigation logic here
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#4A928D] to-[#2F7E79] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl relative"
            >
                {/* Heading */}
                <h2 className="text-2xl font-bold text-center text-colors2 mt-8">
                    Create Account
                </h2>
                <p className="text-sm text-center text-colors2 mb-6">
                    Sign up to get started
                </p>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-sm text-colors1 block mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-colors2"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-colors1 block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-colors2"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-colors1 block mb-1">Contact No</label>
                        <input
                            type="number"
                            minLength="10"
                            maxLength="10"
                            name="contact"
                            value={contact}
                            onChange={handleChange}
                            placeholder="8600456659"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-colors2"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-colors1 block mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-colors2"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-colors1 block mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                                confirmPassword && !isPasswordMatch
                                    ? 'border-red-400 focus:ring-red-400'
                                    : 'focus:ring-colors2'
                            }`}
                            required
                        />
                        {!isPasswordMatch && confirmPassword && (
                            <p className="text-sm text-red-500 mt-1">Passwords do not match</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={!isPasswordMatch}
                        className={`w-full py-2 rounded-lg font-semibold transition duration-300 ${
                            isPasswordMatch
                                ? 'bg-colors1 hover:bg-colors2 text-white'
                                : 'bg-gray-400 text-white cursor-not-allowed'
                        }`}
                    >
                        Register
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-500">
                    Already have an account?{' '}
                    <span className="text-blue-600 hover:underline cursor-pointer">
            Log in
          </span>
                </p>
            </motion.div>
        </div>
    );
};


export default RegisterPage;
