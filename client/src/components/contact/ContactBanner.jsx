import React from 'react';
import { motion } from 'framer-motion';

const ContactBanner = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1920&q=80"
          alt="Web Design Blocks"
          className="w-full h-full object-cover opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-slate-900/70 dark:bg-slate-900/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-center space-x-4 mb-6">
            <h6 className="text-sm font-bold tracking-widest text-white uppercase">
              GET IN TOUCH
            </h6>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white leading-tight">
            Reach Out To Gaurya<br />
            Technologies Today
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;
