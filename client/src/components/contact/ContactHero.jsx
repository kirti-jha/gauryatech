import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-[#f8f9fa] dark:bg-slate-800">
      {/* Diagonal slice at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white dark:bg-slate-900 transform translate-y-12 -skew-y-2 z-10"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <h6 className="text-sm font-bold tracking-widest text-[#0caab2] uppercase mb-6">
            WE'D LOVE TO HEAR
          </h6>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 dark:text-white leading-tight">
            Contact Us For Tailored Solutions And Support
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-200 dark:border-slate-700">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-4">Phone</h3>
            <p className="text-slate-500 dark:text-slate-400 font-light">7703977691</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-4">Email</h3>
            <p className="text-slate-500 dark:text-slate-400 font-light">info@gauryatechnologies.com</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-4">Address</h3>
            <p className="text-slate-500 dark:text-slate-400 font-light">Dwarka Delhi</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-4">Social Media</h3>
            <div className="flex space-x-4 text-[#0caab2]">
              <a href="#" className="hover:text-[#098b91] transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#098b91] transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-[#098b91] transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-[#098b91] transition-colors"><FaYoutube /></a>
              <a href="#" className="hover:text-[#098b91] transition-colors"><FaLinkedinIn /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
