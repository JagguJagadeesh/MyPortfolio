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
  { img: SkillReact, name: "React" },
  { img: SkillJS, name: "JavaScript" },
  { img: SkillNode, name: "Node.js" },
  { img: SkillMongo, name: "MongoDB" },
  { img: SkillExpress, name: "Express.js" },
  { img: SkillJava, name: "Java" },
  { img: SkillPython, name: "Python" },
  { img: SkillHTML, name: "HTML" },
  { img: SkillCSS, name: "CSS" },
  { img: SkillPSql, name: "PostgreSQL" },
];

const SimpleSkills = () => {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-violet-600">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-md border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mt-3">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleSkills;
