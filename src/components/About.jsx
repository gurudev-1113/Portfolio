import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar.png';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter uppercase">
          <span className="text-secondary font-mono text-xl mr-4 underline decoration-4 underline-offset-8">01.</span>
          About Me
        </h2>
        <div className="h-[4px] bg-slate-100 flex-grow rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-10"
          >
            <div className="space-y-8 text-tertiary text-lg md:text-xl leading-[1.8] text-justify">
              <p>
                I am a dedicated <span className="text-secondary font-black underline decoration-2 underline-offset-4">Computer Science student</span> with a profound passion for Artificial Intelligence, 
                Machine Learning, and Full-Stack Development.
              </p>
              <p>
                My journey in technology is driven by a deep-seated curiosity to understand how data can be architected and transformed into actionable insights. I thrive on the challenge of bridging the gap between complex theoretical models and high-performance, real-world applications.
              </p>
              <p>
                Whether it's optimizing embedded AI models for edge devices or building scalable web solutions, I am committed to delivering excellence through innovation and rigorous problem-solving.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl"
          >
            <h3 className="text-quaternary font-black text-2xl mb-8 tracking-tighter uppercase">Professional Focus</h3>
            <div className="flex flex-wrap gap-4">
              <SkillBadge text="AI Research" />
              <SkillBadge text="Cloud ML" />
              <SkillBadge text="Analytics" />
              <SkillBadge text="UX Design" />
              <SkillBadge text="Robotics" />
              <SkillBadge text="DevOps" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillBadge = ({ text }) => (
  <div className="flex items-center gap-2 bg-secondary/5 border border-secondary/10 px-6 py-3 rounded-full text-secondary font-mono text-sm font-semibold shadow-sm">
    <span className="text-secondary">▹</span>
    {text}
  </div>
);

export default About;
