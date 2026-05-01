import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Users, Star } from 'lucide-react';

import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.png';

const Achievements = () => {
  const allAchievements = [
    {
      id: 1,
      title: 'Hack For Hire 2026 – Participant',
      issuer: 'Anvesana TBI, PESITM Shivamogga',
      image: cert1,
      date: 'March 2026',
      type: 'Hackathon',
      description: 'Participated in a startup-focused hackathon, demonstrating teamwork, technical skills, and problem-solving on real-world challenges.'
    },
    {
      id: 2,
      title: 'Xpheria 2026 National Hackathon – Participant',
      issuer: "Alva's Institute of Engineering & Technology",
      image: cert2,
      date: 'April 2026',
      type: 'Hackathon',
      description: 'Actively participated in a 24-hour national-level hackathon, collaborating to build innovative solutions under time constraints.'
    },
    {
      id: 3,
      title: 'HackVerse (TechFusion 2025) – Finalist',
      issuer: 'Dayananda Sagar Academy of Technology & Management',
      image: cert3,
      date: 'October 2025',
      type: 'Hackathon',
      description: 'Selected as a finalist in an inter-college technical fest, working on IoT, cybersecurity, and blockchain-based solutions.'
    },
    {
      id: 4,
      title: 'Technovate 2K25 – Participant',
      issuer: "Alva's Institute of Engineering & Technology",
      image: cert5,
      date: 'September 2025',
      type: 'Competition',
      description: 'Contributed to AI & Data Science-based projects during a departmental innovation event, showcasing technical and collaborative skills.'
    },
    {
      id: 5,
      title: 'STEM & AI Workshop – Resource Contributor',
      issuer: 'The Bharat Scouts and Guides',
      image: cert4,
      date: 'October 2025',
      type: 'Workshop',
      description: 'Recognized for contribution as a resource person in a national-level training program on STEM, Robotics, AI, and Youth Entrepreneurship.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allAchievements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [allAchievements.length]);

  return (
    <section id="achievements" className="section-padding overflow-hidden bg-white">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter uppercase font-outfit">
          <span className="text-secondary font-mono text-xl mr-4 underline decoration-4 underline-offset-8">05.</span>
          Achievements & Hackathons
        </h2>
        <div className="h-[4px] bg-slate-100 flex-grow rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] border-4 border-black shadow-[20px_20px_0px_0px_rgba(2,132,199,0.1)] bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col md:flex-row p-4 md:p-8"
            >
              <div className="w-full md:w-1/2 h-full relative p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group">
                <img 
                  src={allAchievements[currentIndex].image} 
                  alt={allAchievements[currentIndex].title}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop';
                  }}
                />
                <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest shadow-xl">
                  {allAchievements[currentIndex].type}
                </div>
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-secondary text-white rounded-2xl shadow-lg">
                    <Trophy size={32} />
                  </div>
                  <div className="h-[2px] w-12 bg-slate-100"></div>
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black text-black mb-6 tracking-tighter leading-tight uppercase font-outfit">
                  {allAchievements[currentIndex].title}
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Users size={20} className="text-secondary" />
                    <p className="text-secondary font-black text-lg md:text-xl tracking-tight">{allAchievements[currentIndex].issuer}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award size={20} className="text-black" />
                    <p className="text-black font-bold text-base md:text-lg italic">{allAchievements[currentIndex].date}</p>
                  </div>
                </div>

                <div className="mb-10">
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium bg-slate-50 p-6 rounded-2xl border-l-4 border-secondary">
                    {allAchievements[currentIndex].description}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-2">
                    {allAchievements.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-10 bg-secondary' : 'w-2 bg-slate-200'
                          }`}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-slate-100 font-black text-5xl italic">0{currentIndex + 1}</p>
                    <Star className="text-secondary mt-2 fill-secondary" size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
