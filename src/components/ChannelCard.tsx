import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Eye,
  CheckCircle,
  Badge,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';


interface ChannelCardProps {
    channelName:string,
    channelNiche:string,
    channelSubscribers:string,
    realtimeViews:string,
    salePrice:string,
    verificationStatus:string,
    monetizationStatus:string,
    status:string,
    screenshotUrls:string,
    channelProfile:string,
     onViewDetails: () => void;
}

const ChannelCard: React.FC<ChannelCardProps> = ({
  channelName,
  channelNiche,
  channelSubscribers,
  realtimeViews,
  salePrice,
  verificationStatus,
  monetizationStatus,
  status,
channelProfile,
onViewDetails
}) => {

  const formatNumber = (num: string | number) => {
    const parsed = typeof num === 'string' ? parseFloat(num.replace(/,/g, '')) : num;
    if (isNaN(parsed)) return '0';
    if (parsed >= 1000000) return (parsed / 1000000).toFixed(1) + 'M';
    if (parsed >= 1000) return (parsed / 1000).toFixed(1) + 'K';
    return parsed.toString();
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Abbas! I'm interested in the "${channelName}" channel. Can you provide more details?`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.floor(Math.random()) * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className={`px-4 py-2 text-xs font-semibold text-white text-center ${
        status === 'purchased' ? 'bg-green-500' : 'bg-red-500'
      }`}>
        {status === 'purchased' ? 'AVAILABLE':'SOLD' }
      </div>

      <div className="relative overflow-hidden">
        <img
          src={channelProfile || ''}
          alt={channelName}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
        {monetizationStatus === 'Monetized' ? (
  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
    <CheckCircle className="w-3 h-3" />
    <span>Monetized</span>
  </span>
) : (
  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
    <CheckCircle className="w-3 h-3" />
    <span>Not Monetized</span>
  </span>
)}
         {verificationStatus === 'Verified' ? (
  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
    <Badge className="w-3 h-3" />
    <span>Verified</span>
  </span>
) : (
  <span className="bg-gray-400 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
    <Badge className="w-3 h-3" />
    <span>Not Verified</span>
  </span>
)}

        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors">
          {channelName}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{channelNiche || 'General'}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-sky-500" />
            <div>
              <div className="text-sm font-semibold text-gray-800">
                {formatNumber(channelSubscribers)}
             
              </div>
              <div className="text-xs text-gray-500">Subscribers</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4 text-sky-500" />
            <div>
              <div className="text-sm font-semibold text-gray-800">
                {realtimeViews||0}
              </div>
              <div className="text-xs text-gray-500">Real Time Views</div>
            </div>
          </div>
        </div>

        <div className="bg-sky-50 rounded-lg p-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Sale Price</span>
            <span className="text-sm font-bold text-green-600">
             $
              {salePrice}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <motion.button
            // onClick={() => onViewDetails(channel)}
            onClick={onViewDetails}
            className="flex-1 bg-sky-50 text-sky-600 px-4 py-2 rounded-lg font-medium hover:bg-sky-100 transition-colors flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Details</span>
          </motion.button>

          <motion.button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChannelCard;