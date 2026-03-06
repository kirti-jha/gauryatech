import React from 'react';
import { motion } from 'framer-motion';

const TailoredSolutions = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16">
          <h6 className="text-sm font-bold tracking-widest text-[#0caab2] uppercase mb-4">
            WHO WE ARE
          </h6>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white leading-tight max-w-4xl">
            Your Partner For Tailored Digital Solutions And Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-[4/3] relative rounded-[2rem] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80"
              alt="Web Design Wood Blocks"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-slate-800 dark:text-slate-100 mb-6 leading-snug">
              Since Our Inception, We Have Transformed Businesses,
              Leading To Increased Digital Engagement And Growth
              Through Our Bespoke Solutions And Unwavering Support.
            </h3>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-6">
              At Gaurya Technologies Pvt Ltd, we pride ourselves on delivering exceptional digital services
              that drive results. Our strategic partnerships with startups and established firms have
              resulted in enhanced user experiences, accelerated project timelines, and significant ROI.
              Clients trust us for our innovative approach, delivering bespoke software and website
              solutions that not only meet their needs but also exceed expectations. Our commitment to
              excellence empowers businesses to thrive in an ever-evolving digital landscape.
            </p>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Our clients experience improved efficiency and enhanced engagement levels by leveraging
              our customized digital solutions, leading to significant growth in their businesses.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TailoredSolutions;
