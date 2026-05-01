import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-professional min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
