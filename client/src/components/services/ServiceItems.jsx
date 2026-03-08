import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: '01',
    title: 'AEPS (Aadhaar Enabled Payment System)',
    description: "Empower your customers to perform basic banking transactions using their Aadhaar number and biometric authentication. Safe, secure, and highly accessible.",
    subServices: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Aadhaar Pay'],
    image: 'https://images.unsplash.com/photo-1601597111158-2fcee29ec4d0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '02',
    title: 'BBPS (Bharat Bill Payment System)',
    description: "A one-stop solution for all bill payments. Pay electricity, water, gas, and more through a unified and reliable platform.",
    subServices: ['Electricity Bill', 'Water & Gas', 'DTH Recharge', 'Fastag'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '03',
    title: 'DMT (Domestic Money Transfer)',
    description: "Fast and secure domestic money transfer service. Send money to any bank account in India instantly, 24/7.",
    subServices: ['Instant IMPS', 'NEFT Transfer', 'Account Verification', '24/7 Service'],
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '04',
    title: 'Mobile & DTH Recharge',
    description: "Instant recharge solutions for all major telecom and DTH operators. Fast, easy, and always available.",
    subServices: ['Prepaid Mobile', 'Postpaid Bills', 'DTH Refresh', 'Data Packs'],
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '05',
    title: 'Personal & Business Loans',
    description: "Need financial support? We offer flexible loan options with minimal documentation and quick processing to help you grow.",
    subServices: ['Personal Loans', 'Business Loans', 'Gold Loans', 'Instant Approval'],
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '06',
    title: 'Credit Card Services',
    description: "Choose from a wide range of credit cards from top banks. Competitive rates and exclusive offers tailored to your needs.",
    subServices: ['New Applications', 'Limit Increase', 'Reward Programs', 'Global Usage'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '07',
    title: 'CC Bill Payment',
    description: "Never miss a due date. Pay your credit card bills from any bank securely through our integrated payment gateway.",
    subServices: ['Instant Payment', 'All Banks Supported', 'Payment History', 'Secure Gateway'],
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '08',
    title: 'Payout Services',
    description: "Streamline your business payments. Automated and bulk payout solutions for vendors, employees, and partners.",
    subServices: ['Bulk Transfers', 'Real-time Processing', 'API Integration', 'Transaction Scaling'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '09',
    title: 'MATM (Micro ATM)',
    description: "Transform your shop into a mini-bank. Micro ATM services for easy cash withdrawals for your customers.",
    subServices: ['Cash Withdrawal', 'Balance Check', 'High Commissions', 'Bluetooth Support'],
    image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '10',
    title: 'Bank Account Opening',
    description: "Open digital savings and current accounts instantly. No more long queues or complicated paperwork.",
    subServices: ['Savings Account', 'Current Account', 'Instant KYC', 'Zero Balance Options'],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '11',
    title: 'PAN Card Services',
    description: "Apply for a new PAN card or request corrections with ease. Professional assistance throughout the process.",
    subServices: ['New Application', 'PAN Correction', 'e-PAN Card', 'Physical PAN Card'],
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '12',
    title: 'PPI Wallet',
    description: "Manage your funds conveniently with our secure PPI wallets. Fast transactions and easy top-ups.",
    subServices: ['Wallet Top-up', 'P2P Transfer', 'Merchant Payments', 'Secure Access'],
    image: 'https://images.unsplash.com/photo-1559526324-593bc853d999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '13',
    title: 'Travel Booking',
    description: "Plan your trip with ease. Flight, train, and bus bookings at the most competitive rates available in the market.",
    subServices: ['Flight Tickets', 'Train Bookings', 'Bus Tickets', 'Hotel Stays'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '14',
    title: 'Holiday Packages',
    description: "Explore the world with our curated travel packages. From family vacations to solo adventures, we have it all.",
    subServices: ['Domestic Tours', 'International Travel', 'Custom Itineraries', 'Guided Experiences'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '15',
    title: 'Insurance Solutions',
    description: "Secure your future and your family's with our comprehensive insurance plans—Health, Life, and General Insurance.",
    subServices: ['Health Insurance', 'Life Insurance', 'Vehicle Insurance', 'General Protection'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '16',
    title: 'Payment Gateway',
    description: "Integrate our secure and reliable payment gateway into your business for smooth and effortless online transactions.",
    subServices: ['Fast Integration', 'PCI-DSS Secure', 'Multi-currency', 'Real-time Analytics'],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '17',
    title: 'POS Machine',
    description: "Grow your business by accepting all types of cards. Portable, secure, and easy-to-use POS machines for every shop.",
    subServices: ['Mobile POS', 'All Card Types', 'Fast Settlements', 'E-Receipts'],
    image: 'https://images.unsplash.com/photo-1556740734-754f159a2739?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '18',
    title: 'Sound Box',
    description: "Never miss a payment alert. Instant voice-based confirmation for every successful UPI and QR payment.",
    subServices: ['Voice Alerts', 'Multilingual Support', 'Long Battery Life', '4G Connectivity'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
  }
];

const ServiceItems = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 relative z-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-start space-x-4 mb-6">
                  <span className="text-4xl font-serif text-[#0caab2] opacity-50">
                    {service.id}
                  </span>
                  <div>
                    <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-3 leading-tight font-medium">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light text-sm mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.subServices.map((sub, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 text-[10px] font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 mt-auto">
                <div className="w-full aspect-video rounded-2xl overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
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
