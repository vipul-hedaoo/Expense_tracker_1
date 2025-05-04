import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Firstpage5sec = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete(); // Callback after animation
        }, 3000); // 5 seconds

        return () => clearTimeout(timeout);
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="bg-colors1 bg-cover fixed top-0 left-0 w-full h-full bg-brand flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="text-white text-3xl font-bold shadow-2xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                ExpenseTracker
            </motion.h1>
        </motion.div>
    );
};

export default Firstpage5sec;
