import { motion } from "framer-motion";
import HeroImage from "../assets/myimage.png";

const HeroImageCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
            }}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] rounded-xl overflow-hidden shadow-lg dark:shadow-violet-500 transition-transform duration-300"
        >
            <img
                src={HeroImage}
                alt="Jagadeesh Chakali"
                className="w-full h-full object-cover object-top"
            />
        </motion.div>
    );
};

export default HeroImageCard;
