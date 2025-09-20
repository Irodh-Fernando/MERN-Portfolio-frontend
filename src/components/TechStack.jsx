// src/components/TechStack.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaCloud } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFramer, SiTsnode } from "react-icons/si";

const tech = [
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-300" },
  { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
  { name: "Cloud", icon: <FaCloud />, color: "text-blue-300" },
  { name: "tsParticles", icon: <SiTsnode />, color: "text-purple-400" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 px-6 bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">🛠️ My Tech Stack</h2>
      <div className=" grid grid-cols-4 md:grid-cols-8 gap-8 justify-items-center">
        {tech.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center gap-2 text-center ${item.color} hover:scale-105 transition-transform duration-300`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-5xl">{item.icon}</div>
            <span className="text-sm font-medium">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
