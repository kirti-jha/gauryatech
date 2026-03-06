import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ quote, author, role, image }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg relative"
  >
    <div className="flex space-x-1 text-yellow-400 mb-6">
      {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" />)}
    </div>

    <p className="text-slate-600 dark:text-slate-300 font-medium italic mb-8 relative z-10">
      "{quote}"
    </p>

    <div className="flex items-center space-x-4">
      <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white">{author}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>

    {/* Decorative quote mark */}
    <div className="absolute top-6 right-8 text-8xl font-serif text-slate-100 dark:text-slate-700 opacity-50 z-0 leading-none">
      "
    </div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Gauryatechnologies was a pleasure. Their developers are highly skilled and knowledgeable. They understood our requirements perfectly and implemented them flawlessly. We are very satisfied with the end product.",
      author: "Anish Kumar",
      role: "PHP Developer",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      quote: "The post-project support we received from Gauryatechnologies was exceptional. They were always available to help us with any issues, even after the project was completed. Their dedication to customer satisfaction is truly commendable.",
      author: "Mandeep",
      role: "Restaurant Owner",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      quote: "Gauryatechnologies exceeded our expectations. They delivered a robust software solution on time, and their attention to detail was outstanding. Their team is professional and responsive. Highly recommend!",
      author: "Alapati Jain",
      role: "Businessman",
      image: "https://i.pravatar.cc/150?img=13"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden relative" id="testimonials">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600 rounded-[100%] opacity-[0.03] dark:opacity-10 pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            What Our Customers says about <br /> Gauryatechnologies
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
