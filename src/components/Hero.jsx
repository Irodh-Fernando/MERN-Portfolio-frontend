// components/Hero.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "./particles";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const TAGLINES = [
  "Creative Technologist",
  "Futuristic Developer",
  "Visionary Entrepreneur",
  "Full-Stack Explorer",
  "Cosmic Coder",
];

export default function HeroSection() {
  const [a, setA] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % TAGLINES.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const speakIntro = () => {
      const message = new SpeechSynthesisUtterance(
        "Welcome to Irodh Fernando's futuristic portfolio. Let's build the future together."
      );
      message.rate = 1;
      message.pitch = 1;
      message.volume = 0.5;
      message.lang = "en-US";
      // Some browsers block autoplay speech — browser may require user gesture
      try {
        window.speechSynthesis.cancel(); // cancel any previous
        window.speechSynthesis.speak(message);
      } catch (e) {
        // ignore if blocked
        // console.warn("Speech blocked or not available", e);
      }
    };

    if (typeof speechSynthesis !== "undefined") {
      if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener("voiceschanged", speakIntro);
      } else {
        speakIntro();
      }
    }

    return () => {
      if (typeof speechSynthesis !== "undefined") {
        speechSynthesis.removeEventListener("voiceschanged", speakIntro);
      }
    };
  }, [a]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Avatar - note: if placed in public folder, use '/avatar.jpg' not '/public/avatar.jpg' */}
      <motion.img
        src="/avatar.jpg"
        alt="Irodh Fernando Avatar"
        className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-purple-500 shadow-lg z-10 mb-6"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        whileHover={{ scale: 1.06 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="z-10 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-2">
          Irodh Fernando <span className="text-purple-400">Creates</span>
        </h1>
        <p className="text-lg md:text-xl font-light mb-4">
          Building the future with code, creativity, and cosmic ambition 🚀
        </p>

        {/* Framer Motion Tagline Carousel */}
        <div className="h-8 md:h-10 mb-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="text-xl md:text-2xl font-medium"
            >
              {TAGLINES[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition duration-300"
        >
          Explore My Work
        </a>
      </motion.div>

      <button
        onClick={() => setA((v) => v + 1)}
        className="text-white absolute top-4 right-4 cursor-pointer p-2 rounded-full hover:bg-white/10"
        aria-label="Play intro"
      >
        <HiMiniSpeakerWave size={22} />
      </button>
    </section>
  );
}
