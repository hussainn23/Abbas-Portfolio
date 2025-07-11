import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MessageCircle, Star } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi Abbas! I'm interested in your YouTube channels. Can you help me find the right one for my needs?"
    );
    window.open(`https://wa.me/923499891325?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-40 w-80 h-80 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 font-medium">Trusted by 500+ clients</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Abbas
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Helping entrepreneurs and content creators buy and sell{' '}
              <span className="font-semibold text-sky-600">monetized YouTube channels</span>{' '}
              with confidence and security.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => onNavigate('channels')}
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Explore Channels</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={handleWhatsAppClick}
                className="bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 border-2 border-sky-200 hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact on WhatsApp</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <span className="block text-2xl font-bold text-gray-800">500+</span>
                <span>Happy Clients</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-800">$2M+</span>
                <span>Total Sales</span>
              </div>

            </motion.div>
          </motion.div>

          {/* Right Content - Profile */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div
                className="relative z-10 w-80 h-80 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >



                <img
                  src="https://firebasestorage.googleapis.com/v0/b/inner-bliss-65eb3.appspot.com/o/channel_screenshots%2Fabbas.jpg?alt=media&token=b8406538-a43f-4fc8-b502-2eb6cd984dd1"
                  alt="Abbas Image"
                  className="w-full h-full object-cover"
                />



                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-600">Available Now</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">2+ Years</div>
                  <div className="text-sm text-gray-500">Experience</div>
                </div>
              </motion.div>

              {/* Background decoration */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-100 to-sky-100 rounded-3xl transform -rotate-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;