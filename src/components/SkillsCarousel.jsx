import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Python", "Java"],
  },
  {
    title: "Database & ORM",
    items: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & State Management",
    items: ["Git", "Redux", "Zustand", "VS Code"],
  },
];

const SimpleSkills = () => {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Tech Stack
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Technologies I use to build reliable, scalable applications.
          </p>
          <div className="mt-5 w-16 h-1 bg-violet-600 mx-auto rounded-full" />
        </div>

        {/* Skills */}
        <div className="space-y-10">
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg text-sm sm:text-base font-medium
                               bg-zinc-100 dark:bg-zinc-900
                               text-zinc-800 dark:text-zinc-200
                               border border-zinc-200 dark:border-zinc-800
                               hover:border-violet-500 hover:text-violet-600
                               transition"
                  >
                    {skill}
                  </span>
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
