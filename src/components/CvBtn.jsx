import { motion } from 'framer-motion';
import { FaEye, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import Cv from '/JAGADEESH_CHAKALI_RESUME.pdf';

const SimpleResumeViewer = () => {
  const openResumeInNewTab = () => {
    window.open(Cv, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      {/* View Resume Button */}
      <motion.button
        onClick={openResumeInNewTab}
        className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <FaEye className="mr-3 w-5 h-5" />
        <span>View Resume</span>
        <motion.div
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaExternalLinkAlt className="ml-2 w-4 h-4" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default SimpleResumeViewer;
