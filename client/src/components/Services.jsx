import React from 'react';
import { motion } from 'framer-motion';
import {
  FiMonitor, FiSmartphone, FiDatabase, FiShield,
  FiCloud, FiCode, FiLayout, FiActivity
} from 'react-icons/fi';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700"
  >
    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Services = () => {
  const servicesData = [
    { icon: FiMonitor, title: 'Web Platform', description: 'Robust, scalable web platforms built with modern technologies for unparalleled performance.' },
    { icon: FiSmartphone, title: 'Mobile App', description: 'Cross-platform mobile applications tailored for seamless user engagement.' },
    { icon: FiDatabase, title: 'API Integration', description: 'Secure and efficient third-party API implementation to extend your system\'s capabilities.' },
    { icon: FiShield, title: 'Cyber Security', description: 'Advanced security protocols to protect your business assets and user data.' },
    { icon: FiCloud, title: 'Cloud Infrastructure', description: 'Architecting resilient cloud environments to handle any workload smoothly.' },
    { icon: FiCode, title: 'Fintech Solutions', description: 'Specialized financial technology development including payment gateways and banking software.' },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900" id="services">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Digital Solution Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            We offer a comprehensive suite of digital services designed to accelerate your business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
