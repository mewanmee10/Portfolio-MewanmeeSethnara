import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const socials = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn size={24} />,
      label: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/mewanmee-sethnara-88b4543a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      label: 'Explore my repositories',
      link: 'https://github.com/mewanmee10',
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={24} />,
      label: 'Send me an email',
      link: 'mailto:sethnaramewanmee@gmail.com',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={24} />,
      label: 'Follow on Instagram',
      link: 'https://www.instagram.com/mew__zz_?cplk=azNncmh6ZHg2ejFt',
    },
  ];

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto text-center px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs tracking-[0.3em] text-[#F07868] uppercase font-semibold">
          Let's Connect
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-[#1A2634] mt-2 mb-3">
          Get In <span className="text-[#F07868]">Touch</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-[#F07868] rounded-full mx-auto mb-6"
        />
        <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto mb-12">
          Have a project idea, opportunity, or just want to chat? Reach out through any of these platforms! 💌
        </p>
      </motion.div>

      {/* Social Shortcut Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {socials.map((s, index) => (
          <motion.a
            key={s.name}
            href={s.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex flex-col items-center p-8 bg-white border border-pink-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Icon Bubble */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-[#fff2f0] text-[#F07868] group-hover:bg-[#F07868] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm mb-4"
            >
              {s.icon}
            </motion.div>

            {/* Platform Name */}
            <h3 className="text-lg font-bold text-[#1A2634] group-hover:text-[#F07868] transition-colors mb-1">
              {s.name}
            </h3>

            {/* Subtext */}
            <p className="text-xs text-gray-400 font-medium">
              {s.label}
            </p>

            {/* Direct Arrow */}
            <span className="mt-4 text-xs font-semibold text-[#F07868] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
              Visit →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
