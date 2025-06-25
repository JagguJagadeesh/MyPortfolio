import { motion } from "framer-motion";
import SkillReact from "../assets/skill-react.svg";
import SkillHTML from "../assets/skill-html.svg";
import SkillCSS from "../assets/skill-css.svg";
import SkillJS from "../assets/skill-js.svg";
import SkillNode from "../assets/skill-nodejs.svg";
import SkillMongo from "../assets/skill-mongodb.svg";
import SkillJava from "../assets/skill-java.svg";
import SkillExpress from "../assets/skill-express-js.svg";
import SkillPSql from "../assets/skill-postgresql.svg";
import SkillPython from "../assets/skill-python.svg";

const skills = [
  { img: SkillJava, name: "Java" },
  { img: SkillReact, name: "React" },
  { img: SkillHTML, name: "HTML" },
  { img: SkillCSS, name: "CSS" },
  { img: SkillJS, name: "JavaScript" },
  { img: SkillNode, name: "Node.js" },
  { img: SkillMongo, name: "MongoDB" },
  { img: SkillExpress, name: "Express.js" },
  { img: SkillPSql, name: "PostgresSQL" },
  { img: SkillExpress, name: "Express.js" },
  { img: SkillPython, name: "Python" },
];

const SkillsLinearCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-12 bg-white dark:bg-zinc-950">
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ["0%", "-70%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...skills].map((skill, idx) => (
          <div
            key={idx}
            className="min-w-[120px] flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-md"
          >
            <img src={skill.img} alt={skill.name} className="w-12 h-12 object-contain" />
            <p className="mt-2 text-sm text-center text-zinc-800 dark:text-zinc-300">
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsLinearCarousel;
