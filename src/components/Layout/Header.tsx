import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Youtube } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Home', url: '/' },
    { id: 'channels', label: 'Channels', url: '/channels' },
    { id: 'about', label: 'About', url: '/about' },
    { id: 'contact', label: 'Contact', url: '/contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Abbas</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                className={`px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.url
                    ? 'bg-sky-100 text-sky-600 font-semibold'
                    : 'text-gray-600 hover:text-sky-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="pt-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                    location.pathname === item.url
                      ? 'bg-sky-100 text-sky-600 font-semibold'
                      : 'text-gray-600 hover:text-sky-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
