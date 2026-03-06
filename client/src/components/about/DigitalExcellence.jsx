import React from 'react';
import { motion } from 'framer-motion';

const DigitalExcellence = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1920&q=80"
          alt="Office Meeting"
          className="w-full h-full object-cover opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-slate-900/60 dark:bg-slate-900/80"></div>
      </div>

      {/* Diagonal slice at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white dark:bg-slate-900 transform translate-y-12 -skew-y-2 z-10"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-center space-x-4 mb-6">
            <h6 className="text-sm font-bold tracking-widest text-[#0caab2] uppercase">
              ABOUT US
            </h6>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
            Discover Our Innovative<br />
            Approach To Digital Excellence
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalExcellence;
