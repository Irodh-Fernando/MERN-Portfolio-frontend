import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
    
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful},
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset(); // Clear form after submission
  };

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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <textarea
              {...register("message", { required: "Message cannot be empty" })}
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
          >
            Send Message
          </button>

          {isSubmitSuccessful && (
            <p className="text-green-400 text-sm mt-4 text-center ">✅ Message sent successfully!</p>
          )}
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
