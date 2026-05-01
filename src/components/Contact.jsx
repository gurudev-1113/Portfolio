import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, X } from 'lucide-react';
import ContactModal from './ContactModal';
import avatar from '../assets/prof.png';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <section id="contact" className="section-padding">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 cursor-zoom-in"
          onClick={() => setIsImageModalOpen(true)}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(2,132,199,0.2)] overflow-hidden bg-white group hover:scale-110 transition-transform duration-500">
            <img 
              src={avatar} 
              alt="KK Gurudev" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary font-mono mb-6 text-lg font-bold uppercase tracking-widest"
        >
          What's Next?
        </motion.p>
        <h2 className="text-5xl md:text-6xl font-black text-black mb-8 tracking-tight font-outfit uppercase leading-tight">Get In Touch</h2>
        <p className="text-slate-600 text-xl mb-12 leading-relaxed font-medium">
          Whether you have a question about machine learning, a potential project, 
          or just want to say hi, my inbox is always open!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-black text-white font-black rounded-2xl shadow-2xl transition-all text-xl uppercase tracking-widest flex items-center gap-3 border-4 border-black hover:bg-secondary hover:border-secondary shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]"
          >
            Say Hello <MessageCircle size={24} />
          </motion.button>
          
          <div className="flex gap-4">
            <SocialLink href="https://github.com/gurudev-1113" icon={<Github size={28} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/kkgurudev/" icon={<Linkedin size={28} />} label="LinkedIn" />
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/90 backdrop-blur-xl"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsImageModalOpen(false)}
                className="absolute -top-16 right-0 p-3 bg-black text-white rounded-full hover:bg-secondary transition-all shadow-2xl"
              >
                <X size={32} />
              </button>
              <div className="rounded-[3rem] overflow-hidden border-8 border-black shadow-[30px_30px_0px_0px_rgba(2,132,199,0.1)]">
                <img 
                  src={avatar} 
                  alt="KK Gurudev Large" 
                  className="w-full h-auto max-h-[80vh] object-contain bg-white"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, backgroundColor: '#0284c7', color: '#ffffff' }}
    className="flex items-center gap-3 p-5 bg-white border-4 border-black rounded-[1.5rem] text-black hover:border-secondary transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]"
  >
    {icon}
    <span className="font-black text-sm uppercase tracking-wider">{label}</span>
  </motion.a>
);

export default Contact;
