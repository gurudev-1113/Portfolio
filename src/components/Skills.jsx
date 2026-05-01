import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const row1 = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Scikit-Learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];

  const row2 = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'NVIDIA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }, 
  ];

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter uppercase font-outfit">
          <span className="text-secondary font-mono text-xl mr-4 underline decoration-4 underline-offset-8">03.</span>
          Tech & Skills
        </h2>
        <div className="h-[4px] bg-slate-100 flex-grow rounded-full"></div>
      </div>

      <div className="relative flex flex-col gap-10">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
};

const MarqueeRow = ({ items, direction }) => {
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? [0, -1035] : [-1035, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden py-4 select-none">
      <motion.div
        className="flex gap-8 md:gap-12 whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 bg-white border-4 border-black p-4 md:p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(2,132,199,1)] transition-all duration-300 group hover:-translate-y-2"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
              <img 
                src={item.icon} 
                alt={item.name} 
                className="w-full h-full object-contain transition-all duration-500"
                onError={(e) => { e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'; }}
              />
            </div>
            <span className="text-lg md:text-2xl font-black text-black uppercase font-outfit tracking-tighter">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
