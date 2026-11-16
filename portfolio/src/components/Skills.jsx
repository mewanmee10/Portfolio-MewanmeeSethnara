import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', pct: 95 },
  { name: 'CSS', pct: 90 },
  { name: 'JavaScript', pct: 85 },
  { name: 'PHP', pct: 80 },
  { name: 'C#', pct: 65 },
  { name: '.NET', pct: 70 },
  { name: 'React', pct: 75 },
  { name: 'MySQL', pct: 80 },
  { name: 'Git', pct: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-4xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <span className="text-xs tracking-[0.3em] text-[#F07868] uppercase font-semibold">Expertise</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#1A2634] mt-2 mb-2">
          Technical <span className="text-[#F07868]">Skills</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-[#F07868] mb-12 rounded-full"
        />
      </motion.div>

      {/* Grid of skill bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-2xl bg-white border border-pink-50 hover:border-pink-200 transition-all shadow-sm hover:shadow-md"
          >
            <div className="flex justify-between mb-2">
              <span className="text-[#1A2634] font-semibold text-sm">{skill.name}</span>
              <span className="text-[#F07868] text-sm font-bold">{skill.pct}%</span>
            </div>
            <div className="w-full h-2.5 bg-pink-50 rounded-full overflow-hidden p-0.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: '#F07868' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
