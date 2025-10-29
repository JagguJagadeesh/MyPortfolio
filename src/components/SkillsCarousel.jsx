import { motion } from "framer-motion";

const SimpleSkills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      borderColor: "border-cyan-300 dark:border-cyan-800"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Python", "Java"],
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-300 dark:border-green-800"
    },
    {
      category: "Database & ORM",
      skills: ["MongoDB", "PostgreSQL", "Prisma"],
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-300 dark:border-purple-800"
    },
    {
      category: "Tools & State Management",
      skills: ["Git", "Redux", "Zustand","VScode"],
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-300 dark:border-orange-800"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Tech <span className="text-violet-600">Stack</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-violet-600 mx-auto rounded-full"></div>
        </div>

        {/* Skills Sections */}
        <div className="space-y-8 sm:space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 ${category.bgColor} border-l-4 ${category.borderColor} rounded-r-2xl`}
            >
              {/* Category Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">
                {category.category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.1 + index * 0.04 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="px-5 sm:px-6 py-2 sm:py-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:border-violet-400 dark:hover:border-violet-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                      <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-sm sm:text-base whitespace-nowrap">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleSkills;
