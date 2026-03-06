import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20 lg:py-32">
      {/* Background blobs for a dynamic feel */}
      <div className="absolute top-0 right-0 -z-10 bg-blue-50 dark:bg-slate-800 w-full md:w-1/2 h-full clip-diagonal opacity-60"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
              Empowering <br />
              <span className="text-blue-600">Innovation,</span> One <br />
              Code at a Time!
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg">
              We provide cutting-edge custom software development for startups, SMBs, enterprises, and individuals.
              Elevate your business with our reliable technology solutions.
            </p>

            <div className="flex items-center w-full max-w-md pt-4">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full py-4 pl-6 pr-36 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 transition-colors">
                  Submit
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-8 pt-8 text-sm font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Active Support
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Top Quality
              </div>
            </div>
          </motion.div>

          {/* Graphic / Image part */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl transform rotate-3 opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team at work"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl z-20"
            />
            {/* Decorative badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-30 animate-bounce-slow">
              <div className="text-4xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
