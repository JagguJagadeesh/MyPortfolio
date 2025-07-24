import { motion } from 'framer-motion';
import { useState } from 'react';
import { data } from '../data';
import { FaGithub } from 'react-icons/fa';
import { CiLink } from 'react-icons/ci';

export default function ProjectsSection() {
    const [visibleProjects, setVisibleProjects] = useState(4); // Show 6 projects initially
    const [isLoading, setIsLoading] = useState(false);

    const loadMore = () => {
        setIsLoading(true);
        // Simulate loading delay
        setTimeout(() => {
            setVisibleProjects(prev => prev + 6); 
            setIsLoading(false);
        }, 500);
    };

    const hasMore = visibleProjects < data.length;

    return (
        <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-zinc-800 dark:text-white mb-4">
                        My Projects
                    </h2>
                    <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.slice(0, visibleProjects).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.imgul.src || project.imgul}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-3 group-hover:text-violet-600 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                                    {project.des.length > 100 
                                        ? `${project.des.substring(0, 100)}...` 
                                        : project.des
                                    }
                                </p>

                                {/* Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.git}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-lg hover:border-violet-600 hover:text-violet-600 transition-all duration-200"
                                    >
                                        <FaGithub className="text-lg" />
                                        <span className="text-sm font-medium">Code</span>
                                    </a>

                                    <a
                                        href={project.view}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors duration-200"
                                    >
                                        <CiLink className="text-lg" />
                                        <span className="text-sm font-medium">Live</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button
                            onClick={loadMore}
                            disabled={isLoading}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Loading...
                                </>
                            ) : (
                                <>
                                    Load More Projects
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </>
                            )}
                        </button>
                        
                        {/* Progress Indicator */}
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3">
                            Showing {visibleProjects} of {data.length} projects
                        </p>
                    </motion.div>
                )}

                {/* All Projects Loaded Message */}
                {!hasMore && data.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mt-12 p-6 bg-violet-50 dark:bg-violet-900/20 rounded-xl border border-violet-200 dark:border-violet-800"
                    >
                        <div className="text-violet-600 dark:text-violet-400 text-lg font-semibold mb-2">
                            🎉 That&nbsp;s all folks!
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            You&nbsp;ve seen all {data.length} projects. Want to work together?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors duration-200"
                        >
                            Get In Touch
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
