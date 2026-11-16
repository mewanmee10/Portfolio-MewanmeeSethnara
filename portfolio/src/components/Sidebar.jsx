import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div
      className="fixed left-0 top-0 h-full w-12 flex flex-col items-center justify-center gap-6 z-50 shadow-md"
      style={{ backgroundColor: '#F07868' }}
    >
      <a
        href="https://www.linkedin.com/in/mewanmee-sethnara-88b4543a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
        className="text-white hover:scale-125 transition-transform"
      >
        <FaLinkedinIn size={18} />
      </a>
      <a
        href="https://github.com/mewanmee10"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
        className="text-white hover:scale-125 transition-transform"
      >
        <FaGithub size={18} />
      </a>
      <a
        href="mailto:sethnaramewanmee@email.com"
        title="Email"
        className="text-white hover:scale-125 transition-transform"
      >
        <FaEnvelope size={18} />
      </a>
      <a
        href="https://www.instagram.com/mew__zz_?cplk=azNncmh6ZHg2ejFt"
        target="_blank"
        rel="noreferrer"
        title="Instagram"
        className="text-white hover:scale-125 transition-transform"
      >
        <FaInstagram size={18} />
      </a>
    </div>
  );
}
