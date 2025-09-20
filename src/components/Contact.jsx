// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">📬 Contact Me</h2>
        <p className="text-lg mb-8">
          Whether you want to collaborate, hire, or just say hi — I’d love to hear from you.
        </p>

        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition cursor-pointer"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-10 text-2xl text-purple-400">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
