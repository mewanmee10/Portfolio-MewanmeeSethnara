import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Bow from './Bow';

export default function WelcomeIntro({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const nameLetters = "MEWANMEE SETHNARA".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        >
          {/* Subtle blush ambient background glow */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-[#fce4de] blur-3xl opacity-60 pointer-events-none"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: [0.3, 0.7, 0.5] }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />

          {/* Bow on top with scale-in bounce */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
            className="mb-6 drop-shadow-md"
          >
            <Bow size={90} />
          </motion.div>

          {/* Greeting badge */}
          <motion.span
            className="text-xs uppercase tracking-[0.35em] text-[#F07868] font-semibold border border-[#F07868]/40 px-4 py-1.5 rounded-full mb-4 bg-pink-50/60"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Welcome to my portfolio
          </motion.span>

          {/* Animated Name letter-by-letter */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1A2634] tracking-tight text-center px-4"
          >
            {nameLetters.map((char, index) => (
              <motion.span
                key={index}
                className={char === " " ? "inline-block w-3 md:w-5" : "inline-block text-[#F07868]"}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.045,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle fading in */}
          <motion.p
            className="text-sm md:text-base text-gray-400 font-light tracking-widest mt-4 uppercase text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
           
          </motion.p>

          {/* Elegant loading progress line */}
          <div className="w-48 h-1 bg-pink-100 rounded-full mt-8 overflow-hidden relative">
            <motion.div
              className="h-full bg-[#F07868] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
