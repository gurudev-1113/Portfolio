import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      const templateParams = {
        subject: `New message from ${formData.email}`,
        from_name: formData.email, 
        from_email: formData.email,
        reply_to: formData.email,
        phone_number: formData.phone,
        message: formData.message,
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ email: '', phone: '', message: '' });


      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-4 border-black p-8 md:p-10 z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={24} className="text-black" />
            </button>

            <div className="mb-8">
              <h3 className="text-3xl font-black text-black tracking-tighter uppercase mb-2">Say Hello</h3>
              <p className="text-slate-500 font-bold italic text-lg">Send a direct message to my inbox</p>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center space-y-4"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-2xl font-black text-black uppercase">Message Sent!</h4>
                <p className="text-slate-600 font-bold">I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black">
                    <Mail size={16} className="text-secondary" /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-black disabled:opacity-50"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black">
                    <Phone size={16} className="text-secondary" /> Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-black disabled:opacity-50"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black">
                    <MessageSquare size={16} className="text-secondary" /> Your Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-black resize-none disabled:opacity-50"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 font-bold text-sm"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-5 bg-black text-white font-black rounded-xl shadow-xl flex items-center justify-center gap-3 text-xl uppercase tracking-widest hover:bg-secondary transition-all disabled:bg-slate-400"
                >
                  {status === 'sending' ? (
                    <>Sending... <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Send size={20} /></motion.div></>
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

