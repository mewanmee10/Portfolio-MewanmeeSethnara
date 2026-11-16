import React from 'react';
import { motion } from 'framer-motion';
import Bow from './Bow';

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6 md:px-12">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="text-xs tracking-[0.3em] text-[#F07868] uppercase font-semibold">Who I Am</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#1A2634] mt-2">
          About <span className="text-[#F07868]">Me</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-[#F07868] rounded-full mx-auto mt-4"
        />
      </motion.div>

      {/* 3-column layout: illustration | text | info card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* LEFT — Animation / avatar illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="relative">
            {/* 🎀 Bow at top-left corner with gentle sway */}
            <motion.div
              animate={{ rotate: [178, 182, 178] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-7 -left-5 z-30 pointer-events-none"
            >
              <Bow size={80} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center"
              style={{ backgroundColor: '#fef0ee' }}
            >
              <img
                src="/avatar.png.jpeg"
                alt="Illustration"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  document.getElementById('avatar-placeholder').style.display = 'flex';
                }}
              />
              {/* Placeholder */}
              <div
                id="avatar-placeholder"
                className="absolute inset-0 flex flex-col items-center justify-center text-[#F07868] text-xs text-center leading-7"
              >
              </div>
            </motion.div>
          </div>

          {/* Fun stat chips below avatar */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['Creative 🎨', 'Design-Focused 🎀', 'Team player 🤝'].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.08, backgroundColor: '#fde5e1' }}
                className="bg-pink-50 text-[#F07868] text-xs font-medium px-3.5 py-1.5 rounded-full border border-pink-100 cursor-default transition-colors shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* MIDDLE — Bio text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-5 text-gray-500 leading-relaxed text-sm md:text-base"
        >
          <p>
            Hey! I'm Mewanmee Sethnara <span className="text-[#F07868] font-semibold">a Software Engineering graduate</span> from Sri Lanka with a passion for technology, creativity, and building innovative digital solutions.
          </p>
          <p>
            My interests and skills span <span className="text-[#1A2634] font-semibold">UI/UX Design and Web Development</span>,
            where I love creating visually appealing, intuitive, and user-friendly digital experiences. My interests and skills also extend to <b>Mobile Application Development, Full-Stack Development, and AI Engineering.</b> I enjoy combining creative design with technical skills to transform ideas into functional, responsive, and meaningful applications.
          </p>
          <p>
            I'm always passionate about exploring new technologies and creating digital experiences that make a difference.
          </p>

          {/* CTA */}
          <motion.a
            href="/CV.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(240, 120, 104, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 mt-4 bg-[#F07868] text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
          >
            📄 Download CV
          </motion.a>
        </motion.div>

        {/* RIGHT — Info card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(240, 120, 104, 0.15)" }}
          className="bg-white rounded-2xl shadow-md border border-pink-100 p-6 space-y-4 transition-all"
        >
          {[
            { label: 'Name', value: 'Mewanmee Sethnara Weerawardhena' },
            { label: 'Degree', value: 'HND in Software Engineering, ICBT Campus' },
            { label: 'Email', value: 'sethnaramewanmee@gmail.com' },
            { label: 'Location', value: 'Mirigama, Sri Lanka' },
            { label: 'Status', value: 'Available for Internships ✨' },
          ].map(({ label, value }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.08 }}
              className="flex flex-col gap-0.5 pb-3 border-b border-pink-50 last:border-0 last:pb-0"
            >
              <span className="text-xs text-[#F07868] font-semibold tracking-widest uppercase">{label}</span>
              <span className="text-[#1A2634] text-sm font-medium">{value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
