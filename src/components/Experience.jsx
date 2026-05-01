import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Cpu, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

import p0 from '../assets/p0.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';

const Experience = () => {
  const experiences = [
    {
      title: 'NVIDIA Lab Coordinator',
      organization: 'AIET',
      period: '2024 – Present',
      description: 'Coordinated and managed NVIDIA-powered AI and Robotics lab activities at AIET. Assisted students in exploring AI, Deep Learning, Computer Vision, and Robotics technologies using NVIDIA platforms and tools. Organized hands-on sessions, technical workshops, and collaborative learning initiatives.',
      icon: <Cpu size={20} />,
    },
    {
      title: 'NVIDIA Facilitator',
      organization: 'AIET / Community',
      period: '2024 – Present',
      description: 'Promoted learning initiatives in Robotics, Artificial Intelligence, and Prompt Engineering through workshops, mentoring sessions, and technical guidance. Helped students understand modern AI tools, generative AI concepts, and robotics applications while encouraging innovation.',
      icon: <ShieldCheck size={20} />,
    },
    {
      title: 'AI & Data Science Workshop.',
      organization: "Alva's Institute of Engineering",
      period: '2025',
      description: 'Coordinated sessions for BHARAT Scouts and Guides on AI concepts, prompt engineering, and robotics on NVIDIA Jetson platforms.',
      icon: <Users size={20} />,
    },
  ];

  const galleryImages = [p0, p1, p2, p3, p4, p5, p6];

  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <section id="experience" className="section-padding">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter uppercase font-outfit">
          <span className="text-secondary font-mono text-xl mr-4 underline decoration-4 underline-offset-8">04.</span>
          Professional Experience
        </h2>
        <div className="h-[4px] bg-slate-100 flex-grow rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start group"
            >
              <div className="mt-1 bg-black text-white p-4 rounded-2xl shadow-xl transition-all group-hover:bg-secondary">
                {exp.icon}
              </div>
              <div className="flex-grow border-b-2 border-slate-50 pb-8 last:border-0">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase font-outfit tracking-tight leading-tight">
                    {exp.title} <span className="text-secondary block md:inline md:ml-2 font-black italic">@ {exp.organization}</span>
                  </h3>
                  <span className="text-secondary font-black font-mono text-xs bg-secondary/5 px-3 py-1.5 rounded-full border-2 border-secondary/10 uppercase tracking-widest">{exp.period}</span>
                </div>
                <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden border-4 border-black shadow-[20px_20px_0px_0px_rgba(2,132,199,0.1)] bg-slate-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={galleryIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 flex items-center justify-center p-4"
              >
                <img 
                  src={galleryImages[galleryIndex]} 
                  alt="Professional Experience"
                  className="max-w-full max-h-full object-contain transition-all duration-700"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={(e) => { e.preventDefault(); setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length); }}
                className="p-3 bg-white text-black rounded-full shadow-xl hover:bg-secondary hover:text-white transition-all z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); setGalleryIndex((prev) => (prev + 1) % galleryImages.length); }}
                className="p-3 bg-white text-black rounded-full shadow-xl hover:bg-secondary hover:text-white transition-all z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setGalleryIndex(idx)}
                className={`h-3 rounded-full transition-all duration-500 ${idx === galleryIndex ? 'w-12 bg-secondary' : 'w-3 bg-slate-200'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
