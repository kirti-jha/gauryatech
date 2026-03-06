import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const PricingCard = ({ title, price, highlighted, features }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`p-8 rounded-2xl border ${highlighted ? 'bg-blue-600 border-blue-600 shadow-xl text-white' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg'}`}
  >
    <h3 className={`text-xl font-bold mb-4 ${highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-extrabold">${price}</span>
      <span className={`text-sm ${highlighted ? 'text-blue-100' : 'text-slate-500'}`}>/month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center">
          <FiCheck className={`mr-3 ${highlighted ? 'text-blue-200' : 'text-blue-500'}`} />
          <span className={`${highlighted ? 'text-blue-50' : 'text-slate-600 dark:text-slate-300'}`}>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-bold transition-colors ${highlighted ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50'}`}>
      Choose Plan
    </button>
  </motion.div>
);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900" id="pricing">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Flexible Pricing Plans
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Choose the best plan that fits your business needs. Upgrade or downgrade at any time.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium ${!isYearly ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-blue-600 rounded-full flex items-center px-1 transition-colors"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`font-medium flex items-center ${isYearly ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'}`}>
              Yearly <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price={isYearly ? 49 * 12 * 0.8 : 49}
            features={['Basic Software Setup', 'Email Support', '5 Team Members', 'Basic Analytics']}
          />
          <PricingCard
            title="Professional"
            price={isYearly ? 99 * 12 * 0.8 : 99}
            highlighted={true}
            features={['Custom Software Development', 'Priority Support', 'Unlimited Team Members', 'Advanced Analytics', 'API Access']}
          />
          <PricingCard
            title="Enterprise"
            price={isYearly ? 249 * 12 * 0.8 : 249}
            features={['Full Stack Solutions', '24/7 Dedicated Support', 'Custom Integrations', 'Dedicated Account Manager', 'SLA Guarantee']}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
