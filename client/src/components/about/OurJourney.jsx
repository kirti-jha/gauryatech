import React from 'react';
import { motion } from 'framer-motion';

const OurJourney = () => {
  return (
    <section className="py-20 bg-[#f4f7fa] dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h6 className="text-sm font-bold tracking-widest text-[#0caab2] uppercase mb-4">
              OUR JOURNEY
            </h6>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white leading-tight mb-8">
              From Startup To Digital<br />Innovator: Our History
            </h2>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Founded in the early 2020s, Gaurya Technologies Pvt Ltd emerged as a visionary
              SaaS company dedicated to redefining the digital landscape. Starting with small
              projects for local businesses, we rapidly evolved by forming partnerships with both
              startups and established organizations. Our commitment to delivering high-quality
              website development and software solutions has positioned us as a trusted leader,
              empowering clients to enhance their online presence efficiently and creatively.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-[4/3] relative rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=80"
              alt="SEO Wood Blocks"
              className="object-cover w-full h-full"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurJourney;
