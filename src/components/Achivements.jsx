import { motion } from "framer-motion";
import HackathonImg from "../assets/gdsc.jpeg";


const achievements = [
  {
    title: "GDSC Hackathon – 2nd Place",
    description: "Happy to announce our team's success in securing 2nd place at the college GDSC hackathon! Collaborative coding and determination led us to this achievement. Thank you GDSC GPCET for organizing this program!",
    image: HackathonImg,
  }
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 px-6 dark:bg-zinc-950 text-zinc-900 dark:text-white"
    >
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold">Achievements</h2>
        <p className="text-[#7843E9] text-2xl">---</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
