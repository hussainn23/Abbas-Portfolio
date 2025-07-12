import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram , Mail, Phone, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
const year = new Date(Date.now()).getFullYear();
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Abbas Stock</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in YouTube channel trading. Professional, secure, and reliable.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/channels" className="text-gray-400 hover:text-sky-400 transition-colors">Channels</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-sky-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">Channel Buying</span></li>
              <li><span className="text-gray-400">Channel Selling</span></li>
              <li><span className="text-gray-400">Monetization Help</span></li>
              <li><span className="text-gray-400">Channel Consultation</span></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <span className="text-gray-400">mystock191611@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span className="text-gray-400">+92 349 9891325</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
           
                <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {year} Abbas Stock. All rights reserved. | Privacy Policy | Terms of Service</p>
          <p className="mt-2">Powered by Abbas Stock</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;