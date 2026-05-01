import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import avatar from '../assets/avatar.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center bg-white py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-secondary font-mono mb-4 tracking-[0.3em] text-sm md:text-base font-black uppercase"
            >
              BE Computer Science Student
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black text-black mb-4 tracking-tighter leading-none whitespace-nowrap font-outfit"
            >
              K K GURUDEV<span className="text-secondary">.</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl lg:text-3xl font-black text-secondary mb-8 tracking-tight whitespace-nowrap uppercase"
            >
              Data Science & ML Enthusiast
            </motion.h2>

            <div className="mb-10 max-w-2xl">
              <p className="text-black text-lg md:text-xl leading-relaxed font-bold">
                Highly motivated student building intelligent solutions for real-world problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-center justify-center lg:justify-start w-full">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 bg-black text-white font-black rounded-xl shadow-2xl transition-all text-xl text-center uppercase tracking-wider"
              >
                Explore My Work
              </motion.a>

              <div className="flex gap-6 items-center">
                <SocialIcon href="https://github.com/gurudev-1113" icon={<Github size={28} />} />
                <SocialIcon href="https://www.linkedin.com/in/kkgurudev/" icon={<Linkedin size={28} />} />
                <SocialIcon href="mailto:gurudevkk080@gmail.com" icon={<Mail size={28} />} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center items-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] md:max-w-[550px] lg:max-w-[650px]">
              <img
                src={avatar}
                alt="K K Gurudev"
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_40px_80px_rgba(0,0,0,0.2)] transition-all duration-700 relative z-10"
              />

              <RoleTag text="Data Analyst" top="0" left="0" />
              <RoleTag text="ML Engineer" bottom="0" right="0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, backgroundColor: '#0284c7', color: '#ffffff' }}
    className="text-black transition-all p-3 bg-white rounded-xl border-2 border-slate-100 shadow-lg"
  >
    {icon}
  </motion.a>
);

const RoleTag = ({ text, top, bottom, left, right }) => (
  <div
    style={{ top, bottom, left, right }}
    className="absolute bg-secondary px-8 py-3 rounded-xl text-white shadow-2xl z-20 font-mono text-sm md:text-base font-black whitespace-nowrap uppercase tracking-widest"
  >
    {text}
  </div>
);

export default Hero;
