import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Sprout } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Farming Advisory System',
      description: 'Currently building an AI-driven system leveraging IoT, Computer Vision, and Edge Computing for real-time crop monitoring and predictive farming insights. Focused on optimizing agricultural yields through data-driven decisions.',
      tech: ['AI', 'IoT', 'CV', 'Edge Computing'],
      github: 'https://github.com/gurudev-1113',
      demo: '#',
      icon: <Folder size={32} className="text-black" />,
      active: true
    },
    {
      title: 'Embedded Object Classification System',
      description: 'Designed and implemented an object classification model optimized for performance on NVIDIA Jetson Nano. Fine-tuned model inference to achieve efficient real-time object detection.',
      tech: ['Python', 'TensorFlow', 'Jetson Nano'],
      github: 'https://github.com/gurudev-1113',
      demo: '#',
      icon: <Folder size={32} className="text-black" />
    },
    {
      title: 'Weather Forecasting Web Application',
      description: 'Developed a dynamic web application for real-time forecasting. Integrated external APIs for live data and implemented interactive visualizations using Chart.js.',
      tech: ['Flask', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/gurudev-1113',
      demo: '#',
      icon: <Folder size={32} className="text-black" />
    },
    {
      title: 'Health Risk Management System',
      description: 'Leading the development of a predictive system to identify health-related risks using ML algorithms. Building interactive dashboards for healthcare professionals.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/gurudev-1113',
      demo: '#',
      icon: <Folder size={32} className="text-black" />
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter uppercase font-outfit">
          <span className="text-secondary font-mono text-xl mr-4 underline decoration-4 underline-offset-8">04.</span>
          My Projects
        </h2>
        <div className="h-[4px] bg-slate-100 flex-grow rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -10, 
              transition: { duration: 0.3 }
            }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`group bg-white flex flex-col p-10 rounded-[2.5rem] h-full border-4 border-black shadow-[12px_12px_0px_0px_rgba(2,132,199,0.1)] hover:shadow-[15px_15px_0px_0px_rgba(2,132,199,0.2)] transition-all duration-300 ${project.active ? 'border-secondary shadow-[12px_12px_0px_0px_rgba(2,132,199,0.2)]' : ''}`}
          >
            <div className="flex justify-between items-center mb-8">
              <div className={`p-4 bg-slate-50 rounded-2xl border-2 ${project.active ? 'border-secondary' : 'border-black'}`}>
                {project.icon}
              </div>
              {project.active && (
                <span className="bg-secondary text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full animate-pulse">
                  Active Project
                </span>
              )}
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border-2 border-black rounded-xl hover:bg-secondary hover:text-white transition-all shadow-md">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-black text-black mb-4 group-hover:text-secondary transition-colors tracking-tight font-outfit uppercase leading-tight">
              {project.title}
            </h3>
            
            <p className="text-slate-600 mb-10 flex-grow leading-relaxed font-medium text-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tag, i) => (
                <span key={i} className="text-secondary font-black font-mono text-[11px] uppercase bg-secondary/5 px-4 py-2 rounded-lg border-2 border-secondary/10">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
