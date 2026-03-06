import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-800" id="about">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-100 dark:bg-slate-700 transform -skew-y-3 rounded-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="About Us"
              className="rounded-3xl shadow-xl z-10 w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Custom Software Development Firm: Reliable Business ally for Startups, SMBs, Enterprises, and Individuals
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              Whether it's developing innovative applications, optimizing existing
              systems, or providing strategic technology consulting, these firms offer
              the expertise and support required to drive success in a competitive marketplace.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center text-3xl font-bold text-blue-600">
                  G
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Gauryatechnologies</h4>
                  <p className="text-sm text-slate-500">Software Solution Provider</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 sm:w-1/2 flex items-center italic">
                "Distinctively initiate viral ideas for goal-oriented partnerships."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
