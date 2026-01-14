import { motion } from "framer-motion";
// import { FaEye, FaDownload } from 'react-icons/fa';
import Cv from '/JAGADEESH_CHAKALI_RESUME.pdf';

const CvBtn = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = Cv;
    link.download = 'JAGADEESH_CHAKALI_RESUME.pdf';
    link.click();
    // Optional: Add toast success
  };

  const handlePreview = () => {
    window.open(Cv, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Preview Button */}
      <motion.button
        onClick={handlePreview}
        className="group relative px-8 py-4 bg-gradient-to-r from-violet-600/90 to-purple-600/90 bg-[length:200%_200%] animate-shimmer text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl border border-violet-500/50 backdrop-blur-sm transition-all duration-500 hover:from-violet-700 hover:to-purple-700 hover:scale-105 hover:-translate-y-1"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* <FaEye className="mr-3 w-5 h-5 group-hover:animate-pulse" /> */}
        <span>View Resume</span>
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />
      </motion.button>

      {/* Download Button */}
      <motion.button
        onClick={handleDownload}
        className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 border border-emerald-500/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:-translate-y-1"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* <FaDownload className="mr-3 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" /> */}
        Download CV
      </motion.button>
    </div>
  );
};

export default CvBtn;
