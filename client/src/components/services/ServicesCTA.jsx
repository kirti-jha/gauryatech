import React from 'react';
import { motion } from 'framer-motion';

const ServicesCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80"
          alt="Office Meeting"
          className="w-full h-full object-cover opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-slate-900/80 dark:bg-slate-900/90"></div>
      </div>

      {/* Diagonal slice at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-white dark:bg-slate-900 transform -translate-y-16 skew-y-3 z-10"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-20 text-center flex flex-col items-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h6 className="text-sm font-bold tracking-widest text-[#0caab2] uppercase mb-6">
            JOIN US NOW
          </h6>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white leading-tight mb-8 max-w-3xl">
            Enhance Your Digital Presence Today With Gaurya Technologies
          </h2>

          <p className="text-slate-300 font-light mb-12 text-lg">
            Discover how our tailored solutions can elevate your business to new heights.
          </p>

          <button className="bg-[#0caab2] hover:bg-[#098b91] text-white px-8 py-3 rounded-full font-medium tracking-wide transition-colors duration-300">
            GET STARTED
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
