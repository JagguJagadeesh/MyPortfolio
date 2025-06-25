import { motion } from 'framer-motion';
import { data } from '../data';
import { FaGithub } from 'react-icons/fa';
import { CiLink } from 'react-icons/ci';

export default function ProjectsSection() {
    return (
        <section id="projects" className="px-12 py-20 dark:bg-zinc-950">
            <h2 className="text-center text-4xl font-bold mb-14 text-zinc-800 dark:text-white">
                Projects
            </h2>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {data.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition duration-300 border border-zinc-200 dark:border-zinc-700"
                    >
                        {/* Image Section */}
                        <div className="overflow-hidden p-1 h-64 sm:h-72 md:h-80">
                            <img
                                src={project.imgul.src || project.imgul}
                                alt={project.title}
                                className="w-full h-full rounded-lg object-fill transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        {/* Text & Buttons */}
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-violet-800 dark:text-violet-800 mb-2">
                                {project.title}
                            </h3>

                            <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                                {project.des}
                            </p>
                            <div className="flex gap-3 mt-4">
                                {/* GitHub Button */}
                                <a
                                    href={project.git}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg border hover:border-violet-700 hover:text-violet-600 transition text-2xl"
                                >
                                    <FaGithub />
                                </a>

                                {/* Live Link Button */}
                                <a
                                    href={project.view}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg border hover:border-violet-700 hover:text-violet-600 transition text-2xl"
                                >
                                    <CiLink />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
