import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const items = [
    {
      degree: 'Higher National Diploma (HND) in Software Engineering',
      school: 'ICBT Campus, Sri Lanka',
      year: 'Pending – 2026',
      note: 'Studied software development, web technologies, mobile application development, database systems, and software engineering principles.',
    },
    {
      degree: 'OTHM Level 3 Foundation Diploma',
      school: 'ICBT Campus',
      year: 'Completed – 2025',
      note: 'Studying foundation-level subjects to develop academic knowledge and prepare for higher education.',
    },
    {
      degree: 'G.C.E. Ordinary Level (O/L)',
      school: 'C.W.W. Kannangara Central College, Hunumulla, Minuwangoda',
      year: '2023 (2024)',
      note: 'Completed secondary education in Sri Lanka.',
    },
  ];

  return (
    <section id="education" className="py-24 max-w-4xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <span className="text-xs tracking-[0.3em] text-[#F07868] uppercase font-semibold">Background</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#1A2634] mt-2 mb-2">
          My <span className="text-[#F07868]">Education</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-[#F07868] mb-12 rounded-full"
        />
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l-2 border-[#F07868]/40 pl-8 space-y-12 ml-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative group"
          >
            {/* Timeline Dot with pulse on hover */}
            <motion.div
              whileHover={{ scale: 1.4 }}
              className="absolute -left-[41px] top-1.5 w-4 h-4 bg-[#F07868] rounded-full border-2 border-white shadow-md transition-transform"
            />
            
            <span className="inline-block text-xs text-[#F07868] font-bold tracking-widest uppercase bg-pink-50 px-3 py-1 rounded-full mb-1">
              {item.year}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A2634] mt-1 group-hover:text-[#F07868] transition-colors">
              {item.degree}
            </h3>
            <p className="text-gray-400 font-medium text-sm md:text-base mt-0.5">{item.school}</p>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed max-w-2xl">{item.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
