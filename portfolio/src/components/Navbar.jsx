import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between py-5 px-10 md:px-16 sticky top-0 backdrop-blur-md z-40 shadow-sm"
      style={{ backgroundColor: 'rgba(255, 240, 243, 0.85)' }}
    >

      {/* Left: Initials Logo */}
      <div className="relative select-none w-16">
        <span className="text-5xl font-serif font-black text-[#F07868] tracking-wide leading-none">
          MS
        </span>
        <span className="absolute bottom-0 left-1 text-pink-200 italic text-lg leading-none font-light">
          M.S.
        </span>
      </div>

      {/* Center: Nav links */}
      <ul className="hidden md:flex space-x-10 text-[#1A2634] font-semibold text-base">
        {['About', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#F07868] transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-[#F07868]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: Download CV */}
      <a
        href="/CV.pdf"
        download
        className="flex items-center gap-2 bg-[#F07868] text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <FaFilePdf size={16} />
        Download CV
      </a>
    </nav>
  );
}
