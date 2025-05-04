import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";

const FirstPage = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
            if (onComplete) onComplete(); // Callback after animation
        }, 4500); // 5 seconds

        return () => clearTimeout(timeout);
    }, [onComplete]);

    if (!isVisible) return null;
    return (
        <motion.div
            // className="bg-colors1 bg-cover fixed top-0 left-0 w-full h-full bg-brand flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
        <div className="min-h-full flex flex-col md:flex-row items-center justify-center bg-[#f2faf9] py-10 px-4">
            {/* Animated Character with Icons */}
            <div className="relative justify-center mt-10 items-center md:w-1/2 ">
            {/*    /!* Character *!/*/}
                <img
                    src="./specular.jpg" // Replace with actual path
                    alt="character"
                    className="w-[250px] z-10"
                />

            {/*    /!* Juggling Icon Left *!/*/}
            {/*    <motion.img*/}
            {/*        src="/dollar.png" // Replace with actual path*/}
            {/*        alt="dollar"*/}
            {/*        className="w-10 h-10 absolute top-0 left-[30%]"*/}
            {/*        animate={{*/}
            {/*            y: ["0%", "-50%", "0%"],*/}
            {/*            rotate: [0, 20, -20, 0],*/}
            {/*        }}*/}
            {/*        transition={{*/}
            {/*            duration: 2,*/}
            {/*            repeat: Infinity,*/}
            {/*            ease: "easeInOut",*/}
            {/*        }}*/}
            {/*    />*/}

            {/*    /!* Juggling Icon Right *!/*/}
            {/*    <motion.img*/}
            {/*        src="/piechart.png" // Replace with actual path*/}
            {/*        alt="chart"*/}
            {/*        className="w-10 h-10 absolute top-0 right-[30%]"*/}
            {/*        animate={{*/}
            {/*            y: ["0%", "-50%", "0%"],*/}
            {/*            rotate: [0, -20, 20, 0],*/}
            {/*        }}*/}
            {/*        transition={{*/}
            {/*            duration: 2,*/}
            {/*            repeat: Infinity,*/}
            {/*            ease: "easeInOut",*/}
            {/*            delay: 1,*/}
            {/*        }}*/}
            {/*    />*/}
            </div>

            {/* Text */}
            <div>
            <div className="text-center mt-10">
                <h1 className="text-2xl font-semibold text-[#2e8c78] leading-relaxed">
                    Spend Smarter <br/> Save More
                </h1>
            </div>

            {/* Buttons */}
            <div className="mt-6 w-full max-w-xs">
                <button className="w-full bg-gradient-to-r from-[#4ca89a] to-[#357f6e] text-white py-3 rounded-full shadow-lg text-sm font-semibold hover:scale-90 transition duration-300">
                    Get Started
                </button>
                <p className="text-sm text-gray-500 mt-3 text-center">
                    Already Have Account?{" "}
                    <span className="text-[#2e8c78] cursor-pointer font-medium">
            {/*navlink use in palce*/}
                        Log In
          </span>
                </p>
            </div>
            </div>
        </div>
        </motion.div>
    );
};

export default FirstPage;
