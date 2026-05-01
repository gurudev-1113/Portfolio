import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: 'Alva\'s Institute of Engineering and Technology',
      degree: 'Bachelor of Engineering (B.E.) in CSE (Data Science)',
      period: '2023 – Present',
      description: 'Currently pursuing an engineering degree with a specialization in Data Science, focusing on advanced AI, ML algorithms, and software architecture.',
    },
    {
      institution: 'Alva\'s PU College',
      degree: 'Pre-University Education',
      period: '2021 – 2023',
      description: 'Completed Pre-University studies with a primary focus on Mathematics, Physics, and Chemistry (PCMC).',
    },
    {
      institution: 'R.N.S Vidyaniketan School',
      degree: 'SSLC',
      period: '2021',
      description: 'Completed secondary education with strong academic performance and a focus on core scientific principles.',
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter uppercase font-outfit">
          <span className="text-secondary font-mono text-xl mr-4 underline decoration-4 underline-offset-8">02.</span>
          Education
        </h2>
        <div className="h-[4px] bg-slate-100 flex-grow rounded-full"></div>
      </div>

      <div className="space-y-12 max-w-5xl">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start group"
          >
            <div className="hidden md:flex flex-col items-center">
              <div className="p-4 bg-black text-white rounded-2xl shadow-xl group-hover:bg-secondary transition-all">
                <GraduationCap size={28} />
              </div>
              <div className="w-[2px] h-full bg-slate-100 mt-4"></div>
            </div>

            <div className="flex-grow bg-white border-4 border-black p-8 md:p-10 rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[15px_15px_0px_0px_rgba(2,132,199,0.1)] transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-black mb-2 uppercase font-outfit tracking-tight leading-tight">
                    {edu.institution}
                  </h3>
                  <div className="flex items-center gap-2 text-secondary font-black text-lg uppercase tracking-wider">
                    <BookOpen size={18} />
                    {edu.degree}
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-2 border-black rounded-xl text-black font-black text-sm whitespace-nowrap">
                  <Calendar size={16} className="text-secondary" />
                  {edu.period}
                </div>
              </div>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
