import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-slate-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <p className="text-tertiary font-bold text-sm">
          Designed & Built by <span className="text-secondary">K K Gurudev</span>
        </p>
        <p className="text-tertiary font-medium text-xs mt-3 opacity-60">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
