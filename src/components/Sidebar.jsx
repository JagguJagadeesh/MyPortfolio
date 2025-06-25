import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgInstagram } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { SiLeetcode } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineWidgets } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const socialLinks = [
  { icon: <FiGithub size={24} />, link: "https://github.com/JagguJagadeesh" },
  { icon: <SlSocialLinkedin size={24} />, link: "https://www.linkedin.com/in/jagadeesh15/" },
  { icon: <FaXTwitter size={24} />, link: "https://x.com/JagguJagadieesh" },
  { icon: <SiLeetcode size={24} />, link: "https://leetcode.com/u/Jagadeesh02/" },
  { icon: <CgInstagram size={24} />, link: "https://www.instagram.com/j.a.g.a.d.e.e.s.h_15/" },
  { icon: <GoMail size={24} />, link: "mailto:jaggujagadeesh447@gmail.com" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        className="hidden sm:flex w-14 fixed left-0 top-1/4 text-black p-4 rounded-lg z-40 dark:text-white bg-transparent flex-col items-center gap-5"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {socialLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-violet-700"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile Floating Button */}
      <div className="sm:hidden fixed bottom-6 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 bg-violet-600 text-white rounded-full shadow-lg flex items-center justify-center"
        >
          {open ? <RxCross2 size={24}/> : <MdOutlineWidgets size={24} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-2 p-3 rounded-lg bg-white dark:bg-zinc-900 shadow-xl flex flex-col gap-4"
            >
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-700 hover:scale-110 transition"
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Sidebar;
