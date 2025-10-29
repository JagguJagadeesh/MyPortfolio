import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects.jsx";
import Sidebar from "./components/Sidebar";
import CvBtn from "./components/CvBtn.jsx";
import { Typewriter } from 'react-simple-typewriter';
import AboutImage from './assets/aboutImg.png'

import { BsList } from "react-icons/bs";
import {  BiMoon,  BiSun } from "react-icons/bi";
import {  FaArrowUp } from "react-icons/fa6";

import ProfilePic from "./assets/jaggu-logo.png";
import Achievements from "./components/Achivements.jsx";
import SkillsCarousel from "./components/SkillsCarousel.jsx";
import Hero3DCard from "./components/Hero3DCard.jsx";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.mobile-menu')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const roles = ['JAGADEESH', 'a Coder', 'a Learner', 'an Explorer'];

  return (
    <div className="font-inter bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white scroll-smooth overflow-x-hidden">
      {/* Navbar */}
      <motion.header
        className="fixed top-0 w-full z-50 shadow-2xl transition-all duration-300"
        style={{
          backdropFilter: 'blur(20px)',
          backgroundColor: scrollY > 50
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(255, 255, 255, 0.8)',
        }}
        animate={{
          backgroundColor: isDark
            ? scrollY > 50
              ? 'rgba(24, 24, 27, 0.95)'
              : 'rgba(24, 24, 27, 0.8)'
            : scrollY > 50
              ? 'rgba(255, 255, 255, 0.95)'
              : 'rgba(255, 255, 255, 0.8)',
          borderColor: scrollY > 50
            ? isDark ? 'rgba(63, 63, 70, 0.8)' : 'rgba(228, 228, 231, 0.8)'
            : isDark ? 'rgba(63, 63, 70, 0.3)' : 'rgba(228, 228, 231, 0.3)'
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="relative">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-10 h-10 rounded-lg border-2 border-violet-500 shadow-lg"
              />
            </div>
            <a href="#home" className="group">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Jagadeesh Chakali
              </h1>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative py-2 px-4 text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-all duration-300 rounded-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-8 transition-all duration-300 rounded-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setIsDark((prev) => !prev)}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiSun className="w-5 h-5 text-amber-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiMoon className="w-5 h-5 text-violet-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all duration-300 mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <BsList className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                onClick={() => setMenuOpen(false)}
              />

              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute right-4 top-20 w-64 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-2xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden mobile-menu"
              >
                <div className="py-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center px-4 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-all duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-3 opacity-60"></span>
                      {item}
                    </motion.a>
                  ))}

                  <div className="mx-4 my-2 h-px bg-zinc-200 dark:bg-zinc-700"></div>

                  <motion.button
                    onClick={() => {
                      setIsDark((prev) => !prev);
                      setMenuOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-all duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 mr-3">
                      {isDark ? (
                        <BiSun className="w-4 h-4 text-amber-500" />
                      ) : (
                        <BiMoon className="w-4 h-4 text-violet-600" />
                      )}
                    </div>
                    <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Enhanced Sidebar */}
      <Sidebar />

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:text-left overflow-hidden"
      >

        <div className="absolute inset-0 -z-10">
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-violet-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Enhanced Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              <span className="block mb-2 text-zinc-800 dark:text-zinc-200">HEY, I'M</span>
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                <Typewriter
                  words={roles}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={120}
                  deleteSpeed={80}
                  delaySpeed={2000}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl mb-10 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl"
          >
            <span className="font-semibold text-violet-600 dark:text-violet-400">MERN Stack Developer</span> and Computer Engineering Student crafting
            <span className="text-violet-600 dark:text-violet-400 font-semibold"> fast, responsive, and modern </span>
            web applications that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
          >
            <CvBtn />

          </motion.div>

        </motion.div>

        {/* Enhanced Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <Hero3DCard />
        </motion.div>
      </section>

      {/* Your existing About Section (already enhanced) */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
              About Me
            </h2>
            <div className="w-16 h-1 bg-violet-600 rounded"></div>
          </motion.div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-5 gap-12 items-start">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-violet-600 to-violet-700 overflow-hidden">
                {/* Replace this with your actual image */}
                <img
                  src={AboutImage}
                  alt="Jagadeesh Chakali"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-3 space-y-6"
            >
              <div>
                <p>
                  I'm Jagadeesh Chakali, a full-stack developer specializing in React and Node.js. I've developed
                  multiple web applications including FocusMate and StayFinder, and placed 2nd at the GDSC Hackathon
                  competing against 30+ teams. I'm passionate about creating user-friendly applications and constantly
                  learning new technologies to stay ahead in the ever-evolving world of web development.

                </p>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-all hover:scale-105"
                >
                  Get In Touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>


      {/* Enhanced Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SkillsCarousel />
      </motion.div>


      {/* Enhanced Achievements Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Achievements />
      </motion.div>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 dark:from-zinc-950 relative overflow-hidden">

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get&nbsp;In <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full mb-8"></div>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
              Ready to bring your ideas to life? Let&nbsp;s start a conversation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
