import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'ServiceOps',
    subtitle: 'Field Service & Maintenance Management System',
    description:
      'A comprehensive web-based system for managing field service operations, scheduling maintenance tasks, tracking technician assignments, and generating service reports. Built with a focus on operational efficiency and real-time status updates.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/mewanmee10/serviceops',
    demo: '#',
    img: '/serviceops.png',
  },
  {
    title: 'GlobeTrek Adventures',
    subtitle: 'Travel Discovery & Booking Platform',
    description:
      'An elegant travel platform that lets users discover destinations, plan adventures, and book trips seamlessly. Features destination search, user reviews, itinerary builder, and an interactive map experience.',
    tech: ['React', 'JavaScript', 'MySQL', 'PHP', 'CSS'],
    github: 'https://github.com/mewanmee10/GlobeTrek-Adventure-Travel-Websie-.git',
    demo: '#',
    img: '/globetrek.png.png',
  },
  {
    title: 'NWSDB Water Supply Management System',
    subtitle: 'Water Supply & Customer Management Platform',
    description:
      'A web-based water supply management system designed to streamline water service operations. Features customer management, water connection details, billing management, service requests, and efficient water supply administration.',
    tech: ['ASP.NET', 'C#', 'Web API', 'SQL Server', 'JavaScript', 'CSS'],
    github: 'https://github.com/mewanmee10/NWSDB-National-Water-Supply-and-Drainage-Board-Project-',
    demo: '#',
    img: '/nwsdb.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <span className="text-xs tracking-[0.3em] text-[#F07868] uppercase font-semibold">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#1A2634] mt-2 mb-2">
          Featured <span className="text-[#F07868]">Projects</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-[#F07868] mb-12 rounded-full"
        />
      </motion.div>

      {/* Project Cards with stagger */}
      <div className="grid gap-12">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 grid md:grid-cols-2 bg-white border border-pink-50"
          >
            {/* Screenshot with subtle hover zoom */}
            <div className="bg-pink-50 h-64 md:h-auto min-h-[240px] relative overflow-hidden flex items-center justify-center group">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="absolute inset-0 hidden flex-col items-center justify-center text-[#F07868] text-xs font-medium bg-pink-50 p-4 text-center"
              >
                <span>🖼️ Add <strong>{p.img.replace('/', '')}</strong> to <code>/public</code></span>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 flex flex-col justify-between bg-white">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-[#1A2634]">{p.title}</h3>
                <p className="text-[#F07868] text-sm font-semibold mt-1 mb-3">{p.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-pink-50 text-[#F07868] text-xs px-3.5 py-1 rounded-full font-semibold border border-pink-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-2 border-t border-pink-50">
                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-[#1A2634] hover:text-[#F07868] text-sm font-semibold transition-colors"
                >
                  <FaGithub size={16} /> GitHub Repo
                </motion.a>
                <motion.a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(240, 120, 104, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-[#F07868] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md ml-auto"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
