import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Eye, Clock, DollarSign, CheckCircle, Badge, MessageCircle, ExternalLink, Calendar, Shield } from 'lucide-react';
import { Channel } from '../data/channels';

interface ChannelModalProps {
  channel: Channel | null;
  onClose: () => void;
}

const ChannelModal: React.FC<ChannelModalProps> = ({ channel, onClose }) => {
  if (!channel) return null;

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Abbas! I'm interested in purchasing the "${channel.name}" channel. Can we discuss the details?`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const profit = channel.salePrice - channel.purchasePrice;
  const profitPercent = ((profit / channel.purchasePrice) * 100).toFixed(1);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <img
              src={channel.thumbnail}
              alt={channel.name}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl" />
            
            {/* Status Banner */}
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
              channel.status === 'sold' ? 'bg-red-500' : 'bg-green-500'
            }`}>
              {channel.status === 'sold' ? 'SOLD' : 'AVAILABLE'}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-2xl font-bold text-white mb-2">{channel.name}</h2>
              <div className="flex items-center space-x-2">
                <span className="bg-sky-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {channel.niche}
                </span>
                {channel.isMonetized && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Monetized</span>
                  </span>
                )}
                {channel.isVerified && (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium flex items-center space-x-1">
                    <Badge className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Users className="w-8 h-8 text-sky-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">{formatNumber(channel.subscribers)}</div>
                <div className="text-sm text-gray-500">Subscribers</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Eye className="w-8 h-8 text-sky-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">{formatNumber(channel.totalViews)}</div>
                <div className="text-sm text-gray-500">Total Views</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Clock className="w-8 h-8 text-sky-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">{formatNumber(channel.watchTime)}</div>
                <div className="text-sm text-gray-500">Watch Time (hrs)</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <DollarSign className="w-8 h-8 text-sky-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">${formatNumber(channel.earnings)}</div>
                <div className="text-sm text-gray-500">Monthly Earnings</div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Channel Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Channel Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Realtime Views</span>
                    <span className="font-medium">{formatNumber(channel.realtimeViews)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Channel Age</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{channel.channelAge}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Content Type</span>
                    <span className="font-medium">{channel.contentType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">AdSense Type</span>
                    <span className="font-medium">{channel.adsenseType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Violation Status</span>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="font-medium text-green-600">{channel.violationStatus}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Pricing Details</h3>
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Purchase Price</span>
                      <span className="font-medium">${formatNumber(channel.purchasePrice)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Sale Price</span>
                      <span className="font-bold text-lg">${formatNumber(channel.salePrice)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Profit</span>
                        <span className="font-bold text-green-600">${formatNumber(profit)}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">ROI</span>
                        <span className="font-medium text-green-600">{profitPercent}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact on WhatsApp</span>
              </motion.button>
              
              <motion.button
                className="flex-1 bg-sky-50 text-sky-600 px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-sky-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Channel</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChannelModal;