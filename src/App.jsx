import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects.jsx";
import Sidebar from "./components/Sidebar";
import { Typewriter } from 'react-simple-typewriter';

import { BsList } from "react-icons/bs";
import { BiMoon, BiSun } from "react-icons/bi";

import ProfilePic from "./assets/jaggu-logo.png";
import Cv from "../public/CV.pdf";

import Achievements from "./components/Achivements.jsx";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SkillsCarousel from "./components/SkillsCarousel.jsx";
import Hero3DCard from "./components/Hero3DCard.jsx";

const navItems = ["Home", "About", "Projects", "Contact"];


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
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

  const roles = ['JAGADEESH', 'a Coder', 'a Learner', 'a Explorer'];



  return (
    <div className="font-turret  dark:bg-zinc-950 text-zinc-900 dark:text-white scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 opacity-90 bg-violet-600 text-black shadow-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <img src={ProfilePic} alt="Profile" className="w-10 h-10 border border-dotted rounded" />
            <a href="#home">
              <p className="text-xl sm:text-2xl font-bold hover:text-white transition">Jagadeesh Chakali</p>
            </a>
          </div>

          <nav className="hidden md:flex gap-8 text-lg">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white font-semibold transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
              <BsList />
            </button>
            <button
              className="ml-2 hidden md:flex items-center gap-1 text-sm border px-2 py-1.5 rounded-lg hover:text-white transition"
              onClick={() => setIsDark((prev) => !prev)}
            >
              {isDark ? <BiSun size={23} /> : <BiMoon size={23} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-4 top-20 w-48 bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white backdrop-blur-md rounded-xl shadow-lg z-50 border border-zinc-300 dark:border-zinc-700"
            >
              <div className="flex flex-col items-center py-4 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center px-4 py-2 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition"
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsDark((prev) => !prev);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 mt-1 text-sm font-medium text-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition"
                >
                  {isDark ? <BiSun className="text-lg" /> : <BiMoon className="text-lg" />}
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sidebar */}
      <Sidebar />

      {/* Home Section */}
      <section
        id="home"
        className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 pt-28 pb-20 text-center md:text-left overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#7843E9]/30 via-transparent to-[#6c30f7]/10 blur-3xl -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-zinc-900 dark:text-white">
            HEY, I&apos;M{" "}
            <span className="text-[#7843E9]">
              <Typewriter
                words={roles}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-zinc-700 dark:text-zinc-300">
            MERN Stack Developer and Computer Engineering Student with a passion for building fast, responsive, and modern web applications.
          </p>
          <a
            href={Cv}
            download="Jagadeesh_CV"
            className="inline-block px-8 py-3 bg-[#7843E9] text-white font-semibold shadow-lg hover:bg-[#6c30f7] transition transform hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>

        <Hero3DCard />
      </section>

      {/* Skills Section */}
      <SkillsCarousel />

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl  mx-auto break-words">
          <h2 className="text-3xl sm:text-4xl font-bold">ABOUT ME</h2>
          <p className="text-[#7843E9] text-xl sm:text-2xl mt-2">---</p>

          <p className="text-base sm:text-lg mt-4 text-violet-600 leading-relaxed break-words whitespace-normal">
            I&apos;m a passionate and dedicated full-stack developer who thrives on solving problems and bringing ideas to life through code.
          </p>

          <div className="mt-8 sm:mt-10 text-left space-y-6 text-base sm:text-lg text-zinc-800 dark:text-zinc-300 leading-relaxed break-words whitespace-normal">
            <p>
              <span className="text-lg sm:text-xl text-violet-600">✧</span>{' '}
              I specialize in building dynamic, responsive, and performant web applications using the <strong>MERN Stack</strong> (MongoDB, Express.js, React.js, Node.js). From intuitive user interfaces to robust backend systems, I enjoy crafting every part of a digital product.
            </p>
            <p>
              <span className="text-lg sm:text-xl text-violet-600">✧</span>{' '}
              I’m currently pursuing a degree in Computer Engineering, which strengthens my problem-solving abilities and understanding of system-level design, algorithms, and data structures.
            </p>
            <p>
              <span className="text-lg sm:text-xl text-violet-600">✧</span>{' '}
              Apart from coding, I continuously explore new technologies, keep up with industry trends, and enjoy creating content around web development and software engineering. I also actively engage with the developer community through LinkedIn and X.
            </p>
            <p>
              <span className="text-lg sm:text-xl text-violet-600">✧</span>{' '}
              When I’m not coding, you’ll find me exploring open-source projects, writing clean documentation, or helping others on their coding journey.
            </p>
            <p>
              <span className="text-lg sm:text-xl text-violet-600">✧</span>{' '}
              I’m always open to new challenges, whether it&apos;s collaborating on exciting projects, contributing to innovative teams, or building something meaningful from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <Projects />

      {/* Achievements */}
      <Achievements />

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 dark:bg-zinc-950 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-[#7843E9] text-2xl">---</p>
        <div className="text-center mb-10 space-y-2">
          <p className="text-xl text-zinc-800 dark:text-zinc-300">
            Feel free to contact me directly:
          </p>

          {/* Phone */}
          <div className="flex items-center justify-center gap-2 text-violet-700 font-semibold text-lg sm:text-xl">
            <FaPhone className="text-lg text-sky-600" />
            <a
              href="tel:+917396633113"
              className="hover:underline underline-offset-2"
            >
              +91 73966 33113
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-2 text-violet-700 font-semibold text-lg sm:text-xl">
            <MdEmail className="text-2xl text-sky-600" />
            <a
              href="mailto:jaggujagadeesh447@gmail.com"
              className="hover:underline underline-offset-2"
            >
              jagadeeshchakali15@gmail.com
            </a>
          </div>

          <p className="text-lg text-zinc-700 dark:text-zinc-400">
            <span className="text-red-500 text-xl font-semibold">Or</span> submit the form below and I will get back to you.
          </p>
        </div>




        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
