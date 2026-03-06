import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-4' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
              Gauryatechnologies
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</Link>

            {/* Dropdown 1 */}
            <div className="relative group cursor-pointer flex items-center hover:text-blue-600 transition-colors py-2">
              <span>Fintech</span>
              <FiChevronDown className="ml-1 w-4 h-4" />
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/70 backdrop-blur-lg border border-white/30 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                <div className="py-2 flex flex-col">
                  <Link to="/services/aeps" className="px-4 py-2 hover:bg-white/50 transition-colors">Aeps Service</Link>
                  <Link to="/services/recharge" className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700">Recharge</Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</Link>

            <Link to="/partner" className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2.5 rounded-md font-medium transition-colors">
              Become a Partner
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 flex flex-col space-y-4">
            <Link to="/" className="px-2 py-2">Home</Link>
            <Link to="/about" className="px-2 py-2">About Us</Link>
            <Link to="/services" className="px-2 py-2">Services</Link>
            <Link to="/contact" className="px-2 py-2">Contact Us</Link>
            <Link to="/partner" className="bg-blue-800 text-white text-center px-4 py-2 rounded-md">
              Become a Partner
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
