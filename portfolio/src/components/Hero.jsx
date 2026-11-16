import React from 'react';
import { motion } from 'framer-motion';
import Bow from './Bow';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      {/* ── Soft blush background blob with floating animation ── */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, #fef0ee 0%, #fff5f4 55%, transparent 80%)',
        }}
      />

      {/* ── Decorative floating animated dots ── */}
      <motion.span
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-36 w-4 h-4 rounded-full bg-[#F07868] opacity-40"
      />
      <motion.span
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-56 right-20 w-3 h-3 rounded-full bg-[#F07868] opacity-25"
      />
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-44 right-28 w-5 h-5 rounded-full bg-[#fce4de]"
      />
      <motion.span
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-44 left-24 w-3 h-3 rounded-full bg-[#F07868] opacity-20"
      />

      {/* ── Main 2-column grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT — Text content */}
        <div className="flex flex-col items-start space-y-7">

          {/* Hello badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 border-2 border-[#F07868] text-[#F07868] text-sm font-bold tracking-[0.2em] uppercase px-6 py-2.5 rounded-full shadow-sm cursor-default"
          >
            Hello! 
          </motion.span>

          {/* Heading with smooth staggered entrance */}
          <div className="leading-tight">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl font-light text-gray-400 tracking-widest uppercase mb-2"
            >
              I'M
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="font-black text-[#F07868] uppercase"
              style={{ fontSize: 'clamp(3.8rem, 8.5vw, 7rem)', letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              MEWANMEE
              <br />
              SETHNARA
            </motion.h1>
          </div>

          {/* Divider + subtitle */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-0.5 bg-[#F07868] rounded-full shrink-0" />
            <span className="text-gray-500 text-base font-medium tracking-wide">
              Software Engineering Graduate &amp; Aspiring Web Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-gray-400 text-lg leading-relaxed max-w-md"
          >
            Building websites with creativity and code. Turning ideas into beautiful, responsive digital experiences.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-5 pt-1"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px -10px rgba(240, 120, 104, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F07868] text-white px-9 py-4 rounded-full text-base font-semibold hover:bg-[#e46a5a] transition-colors"
            >
              Explore My Projects →
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ x: 4 }}
              className="text-[#1A2634] text-base font-medium hover:text-[#F07868] transition-colors underline underline-offset-4"
            >
              About me
            </motion.a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 text-gray-300 text-xs tracking-widest uppercase pt-3"
          >
            <div className="w-px h-12 bg-[#F07868] opacity-40" />
            Scroll to explore
          </motion.div>
        </div>

        {/* RIGHT — Profile photo */}
        <div className="flex justify-center md:justify-end pr-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Outer animated soft pulse ring */}
            <motion.div
              animate={{
                scale: [1.12, 1.18, 1.12],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, #fce4de 0%, transparent 70%)',
              }}
            />

            {/* Second decorative ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-[#F07868] opacity-20"
              style={{ transform: 'scale(1.08)' }}
            />

            {/* Photo circle */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative overflow-hidden rounded-full shadow-2xl"
              style={{
                width: 'clamp(300px, 40vw, 460px)',
                height: 'clamp(300px, 40vw, 460px)',
                backgroundColor: '#fce4de',
              }}
            >
              <img
                src="/profile.jpg.jpeg"
                alt="Profile"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  document.getElementById('photo-placeholder').style.display = 'flex';
                }}
              />
              <div
                id="photo-placeholder"
                className="absolute inset-0 items-center justify-center text-[#F07868] text-sm text-center leading-8 bg-[#fce4de]"
                style={{ display: 'none' }}
              >
                📸<br />Add <strong>profile.jpg</strong><br />to <code>/public</code>
              </div>
            </motion.div>

            {/* Floating badge — top right with gentle float */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-6 bg-white shadow-lg rounded-2xl px-5 py-2.5 text-sm font-semibold text-[#1A2634] border border-pink-100 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block animate-pulse" />
              Open to work
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-6 bg-[#F07868] shadow-lg rounded-2xl px-5 py-2.5 text-sm font-semibold text-white"
            >
              Full-Stack Developer ✨
            </motion.div>

            {/* 🎀 Bow at bottom of circle with playful bounce */}
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            >
              <Bow size={110} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
