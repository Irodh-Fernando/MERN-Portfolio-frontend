// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A cinematic React portfolio with particles, voice intro, and animated taglines.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "MERN Blog Platform",
    description: "Full-stack blog with MongoDB, Express, React, and Node. Includes JWT auth and cloud deployment.",
    tech: ["MERN", "JWT", "Cloud"],
    link: "#",
  },
  {
    title: "Creative UI Library",
    description: "Reusable components with animation, storytelling, and futuristic design.",
    tech: ["React", "tsParticles", "Storybook"],
    link: "#",
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chatbot powered by OpenAI API with natural conversations and personalized responses.",
    tech: ["React", "Node.js", "OpenAI API"],
    link: "#",
  },
  {
    title: "Smart IoT Dashboard",
    description: "Real-time IoT monitoring dashboard with ESP32 integration and live analytics charts.",
    tech: ["IoT", "ESP32", "React", "Chart.js"],
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable online store with payment gateway, product management, and responsive UI.",
    tech: ["MERN", "Stripe", "Redux"],
    link: "#",
  },
  {
    title: "Virtual Event Platform",
    description: "A futuristic event hosting platform with 3D environments, live streaming, and interactive chats.",
    tech: ["React", "WebRTC", "Three.js"],
    link: "#",
  },
  {
    title: "Creative Portfolio CMS",
    description: "A content management system for portfolios with drag-and-drop editing and dynamic themes.",
    tech: ["Next.js", "Tailwind", "Supabase"],
    link: "#",
  }

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-indigo-800 via-purple-800 to-black p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 z-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }} 
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-purple-600 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-purple-400 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}