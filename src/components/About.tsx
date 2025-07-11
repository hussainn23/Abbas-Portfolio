import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, TrendingUp, CheckCircle, MessageCircle } from 'lucide-react';

const About: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi Abbas! I'd like to learn more about your YouTube channel services. Can we chat?"
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const achievements = [
    { icon: Users, title: '500+ Clients', description: 'Served satisfied customers worldwide' },
    { icon: TrendingUp, title: '$2M+ Sales', description: 'Total channel sales volume' },
    { icon: Award, title: '5 Star Rating', description: 'Consistent excellent reviews' },
    { icon: Shield, title: '100% Secure', description: 'Safe and secure transactions' },
  ];

  const services = [
    'YouTube Channel Buying & Selling',
    'Channel Monetization Assistance',
    'Content Strategy Consultation',
    'Channel Growth Optimization',
    'Due Diligence & Verification',
    'Secure Transaction Management'
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Abbas Stock
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in the YouTube channel marketplace
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Abbas Stock"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl transform rotate-6" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Helping Creators Build Their Digital Empire
            </h3>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                With over 2 years of experience in the YouTube ecosystem, I've helped hundreds of 
                entrepreneurs and content creators navigate the complex world of channel acquisition and sales.
              </p>
              <p>
                My mission is to provide a secure, transparent, and efficient marketplace where 
                buyers and sellers can connect with confidence. Every channel in my portfolio is 
                thoroughly vetted to ensure authenticity and quality.
              </p>
              <p>
                Whether you're looking to start your YouTube journey with an established channel 
                or ready to sell your successful channel, I'm here to guide you through every step of the process.
              </p>
            </div>

            <motion.button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Let's Chat on WhatsApp</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h4>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Services I Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;