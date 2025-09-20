// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">👨‍🚀 About Me</h2>
        <p className="text-lg mb-6">
          I'm Shahen — a creative technologist and aspiring IT entrepreneur. I blend code, design, and storytelling to build immersive web experiences. My mission? To create futuristic, professional-grade applications that inspire and innovate.
        </p>
        <p className="text-md text-purple-300 italic">
          “I believe in crafting digital worlds that feel alive — cinematic, interactive, and unforgettable.”
        </p>

        <div className="mt-12 space-y-6">
        {[
            { label: "React", level: "90%" },
            { label: "Node.js", level: "85%" },
            { label: "MongoDB", level: "80%" },
            { label: "Git & Deployment", level: "75%" },
            { label: "Creative UI/UX", level: "95%" },
        ].map((skill, i) => (
            <motion.div
            key={i}
            initial={{ width: 0 }}
            whileInView={{ width: skill.level }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            >
            <h4 className="text-left text-lg font-semibold mb-1">{skill.label}</h4>
            <div className="w-full bg-white/10 rounded-full h-4">
                <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: skill.level }}
                />
            </div>
            </motion.div>
        ))}
     </div>

      </motion.div>

          <ul className="mt-16 space-y-8 border-l-2 border-purple-500 pl-6">
        <li>
            <h4 className="text-xl font-bold">2023 — MERN Awakening</h4>
            <p className="text-sm text-purple-300">
            Built my first full-stack app and deployed it to the cloud.
            </p>
        </li>
        <li>
            <h4 className="text-xl font-bold">2024 — Cinematic Portfolio</h4>
            <p className="text-sm text-purple-300">
            Designed a futuristic portfolio with particles, voice intro, and animated UI.
            </p>
        </li>
        <li>
            <h4 className="text-xl font-bold">2025 — Visionary Leap</h4>
            <p className="text-sm text-purple-300">
            Building my IT firm to create scalable, creative applications for global impact.
            </p>
        </li>
     </ul>

    </section>
  );
}
