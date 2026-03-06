import React from 'react';
import { motion } from 'framer-motion';

const PartnerCard = ({ name, description, color }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-start"
  >
    <h3 className={`text-xl font-bold mb-4 ${color}`}>{name}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
      {description}
    </p>
    <div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center">
      <span className="text-xs font-bold text-slate-400">Logo</span>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const partners = [
    { name: 'Phonepe', description: "We've partnered with PhonePe to offer seamless, secure, and efficient payment solutions for our users.", color: 'text-purple-600' },
    { name: 'PayU', description: "We've teamed up with PayU to provide fast, secure, and reliable payment solutions, ensuring smooth transactions for all our users.", color: 'text-green-500' },
    { name: 'RazorPay', description: "We've partnered with Razorpay to deliver efficient, secure, and seamless payment experiences, ensuring hassle-free transactions for our users.", color: 'text-blue-500' },
    { name: 'CashFree', description: "We've collaborated with Cashfree Payments to offer quick, secure, and reliable payment solutions, ensuring smooth and effortless transactions for all our users.", color: 'text-orange-500' },
    { name: 'Jio', description: "We've collaborated with Jio Payments to offer quick, secure, and reliable payment solutions, ensuring smooth and effortless transactions for all our users.", color: 'text-blue-700' }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Our payments partners
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
