import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WelcomeIntro from './components/WelcomeIntro';

export default function App() {
  return (
    <div className="relative font-sans text-navy selection:bg-pink-100 selection:text-[#F07868]" style={{ backgroundColor: '#FFF0F3' }}>
      {/* 🌸 Intro Opening Animation showing Name */}
      <WelcomeIntro />

      {/* Social Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-12 overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <div className="space-y-16">
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
