import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-900 mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1920&q=80"
          alt="SEO Blocks"
          className="w-full h-full object-cover opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50"></div>
      </div>

      {/* Diagonal slice at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white dark:bg-slate-900 transform translate-y-16 -skew-y-3 z-10"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center space-x-4 mb-6">
            <h6 className="text-sm font-bold tracking-widest text-[#0caab2] uppercase">
              OUR SOLUTIONS
            </h6>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
            Tailored Digital Services For Your Business
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
