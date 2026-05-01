import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-secondary origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-b border-slate-100' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-black font-black text-3xl tracking-tighter uppercase font-outfit"
          >
            KKG<span className="text-secondary">.</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="nav-link"
              >
                <span className="text-secondary mr-2 font-mono">0{index + 1}.</span> {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white font-black py-3 px-8 rounded-xl shadow-xl hover:bg-secondary transition-all text-xs uppercase tracking-widest flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2 hover:bg-slate-50 rounded-xl transition-all">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col items-center py-12 space-y-8">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-black font-black hover:text-secondary transition-all text-xl tracking-widest uppercase"
                  >
                    <span className="text-secondary mr-3 font-mono">0{index + 1}.</span>
                    {link.name}
                  </a>
                ))}
                <a href="/resume.pdf" download className="bg-black text-white font-black py-5 px-12 rounded-xl shadow-xl w-[80%] text-center flex justify-center items-center gap-3 uppercase tracking-widest">
                  <Download size={24} /> Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
