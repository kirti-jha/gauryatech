import React from 'react';
import { motion } from 'framer-motion';

const MissionValues = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start pt-4"
          >
            <h6 className="text-sm font-bold tracking-widest text-[#0caab2] uppercase mb-4">
              OUR CORE PRINCIPLES
            </h6>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white leading-tight">
              Mission And Values: Our Guiding Stars
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-12"
          >
            <div>
              <h3 className="text-2xl font-serif text-slate-800 dark:text-slate-100 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                At Gaurya Technologies, our mission is to empower businesses of all sizes
                through innovative software solutions and exceptional website
                development. We strive to create impactful digital experiences by
                combining creativity with strategic insights, ensuring our clients achieve
                their goals and elevate their digital presence effectively.
              </p>
            </div>

            <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>

            <div>
              <h3 className="text-2xl font-serif text-slate-800 dark:text-slate-100 mb-4">
                Our Values
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                We value excellence, responsiveness, and innovation. Our team is
                committed to delivering user-friendly, secure, and efficient platforms
                tailored to each client's needs. Integrity and collaboration are at the core
                of our approach, fostering long-term relationships built on trust and
                mutual success.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionValues;
