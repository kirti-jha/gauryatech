import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: '01',
    title: 'Website Development',
    description: "We create bespoke websites tailored to your brand's needs, ensuring they are responsive, secure, and optimized for user experience with the latest technologies.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '02',
    title: 'Software Solutions',
    description: "Our team designs and implements custom software solutions that enhance productivity and efficiency, integrating seamlessly with your existing systems to drive business success.",
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '03',
    title: 'E-Commerce Platforms',
    description: "We develop secure and user-friendly e-commerce platforms tailored to your business model, enhancing customer engagement and driving conversions through optimized shopping experiences.",
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '04',
    title: 'Digital Marketing',
    description: "Our digital marketing services help amplify your online presence, leveraging SEO, PPC, and social media strategies to attract and retain customers effectively.",
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
  }
];

const ServiceItems = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 relative z-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="p-10 flex-grow">
                <div className="flex items-start space-x-6 mb-6">
                  <span className="text-5xl font-serif text-[#0caab2]">
                    {service.id}.
                  </span>
                  <div>
                    <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-4 leading-tight mt-1">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-10 pb-10 mt-auto">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10 text-white"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
