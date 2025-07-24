import { motion } from "framer-motion";
import { FaTrophy, FaCalendarAlt, FaUsers, FaCode } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import HackathonImg from "../assets/gdsc.jpeg";

const achievements = [
  {
    title: "GDSC Hackathon – 2nd Place",
    description: "Happy to announce our team's success in securing 2nd place at the college GDSC hackathon! Collaborative coding and determination led us to this achievement. Thank you GDSC GPCET for organizing this program!",
    image: HackathonImg,
    date: "2024",
    category: "Hackathon",
    position: "2nd Place",
    organization: "GDSC GPCET",
    skills: ["React", "Node.js", "Team Work", "Problem Solving"]
  },
  // Add more achievements here as you get them
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 dark:bg-zinc-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HiSparkles className="text-3xl text-violet-600" />
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <HiSparkles className="text-3xl text-violet-600" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden transition-all duration-500"
            >
              {/* Achievement Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                  <FaTrophy className="text-xs" />
                  {item.position}
                </div>
              </div>

              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCalendarAlt />
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                    <FaUsers />
                    <span>{item.organization}</span>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {item.description.length > 120 
                    ? `${item.description.substring(0, 120)}...` 
                    : item.description
                  }
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {item.skills.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full">
                      +{item.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Achievement Stats */}
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-violet-600 dark:text-violet-400">
                      <FaCode />
                      <span className="font-medium">Tech Event</span>
                    </div>
                    <div className="text-zinc-500 dark:text-zinc-400">
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-violet-500/5 group-hover:via-purple-500/0 group-hover:to-indigo-500/5 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Add Achievement CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-200 dark:border-violet-800">
            <div className="text-2xl">🎯</div>
            <div className="text-left">
              <p className="text-violet-800 dark:text-violet-300 font-semibold">More achievements coming soon!</p>
              <p className="text-violet-600 dark:text-violet-400 text-sm">Stay tuned for more milestones</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
