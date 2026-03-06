import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactFormMap = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative z-20 pb-40">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-10">
              Fill Out The Form Below
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-md focus:outline-none focus:border-[#0caab2] dark:text-white transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-md focus:outline-none focus:border-[#0caab2] dark:text-white transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="5"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-md focus:outline-none focus:border-[#0caab2] dark:text-white resize-none transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#0caab2] hover:bg-[#098b91] text-white px-8 py-3 rounded-md font-medium tracking-wide transition-colors duration-300"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112130.41913735032!2d76.9930922896564!3d28.567086822472758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1afafcc793dd%3A0x6bd77a66974e6490!2sDwarka%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1714416049212!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormMap;
