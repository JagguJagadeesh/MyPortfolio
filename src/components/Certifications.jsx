import { motion } from "framer-motion";
import fullstack from '../assets/gdsc.jpeg'

const certifications = [
  {
    title: "JavaScript Algorithms & Data Structures",
    org: "freeCodeCamp",
    image: fullstack, // Replace with your image path
    link: "https://www.freecodecamp.org/certification/your-cert-id"
  },
  {
    title: "Frontend Developer Career Path",
    org: "Scrimba",
    image: fullstack,
    link: "https://scrimba.com/certificate/your-cert-id"
  },
  {
    title: "Backend Development with Node.js",
    org: "Coursera",
    image: fullstack,
    link: "https://coursera.org/cert/your-cert-id"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6  dark:bg-zinc-950">
      <h2 className="text-4xl font-bold text-center mb-14 text-zinc-800 dark:text-white">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {cert.org}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Certificate →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
