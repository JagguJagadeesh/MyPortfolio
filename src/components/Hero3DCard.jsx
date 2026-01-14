import { motion } from "framer-motion";
import { createContext, useContext } from "react";
import HeroImage from "../assets/myimage.png";

// Create a context for modal state (add this to your app)
export const ModalContext = createContext();

const HeroImageCard = () => {
    const modalContext = useContext(ModalContext);
    const isModalOpen = modalContext?.isResumeOpen || false;

    return (
        <div className={`relative transition-all duration-300 ${isModalOpen ? 'z-0 opacity-50' : 'z-10'}`}>
            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, rotateX: 15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 120
                }}
                whileHover={!isModalOpen ? {
                    scale: 1.05,
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                } : {}} // Disable hover when modal is open
                className="relative group"
            >
                {/* Card Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-2xl blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] bg-gradient-to-br from-violet-500 to-purple-600 p-1 rounded-2xl shadow-2xl">
                    <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden relative">
                        <img
                            src={HeroImage}
                            alt="Jagadeesh Chakali"
                            className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-violet-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                    className="absolute -bottom-3 -left-3 bg-white dark:bg-zinc-800 text-green-600 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border-2 border-green-500"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Open to Work
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HeroImageCard;
