import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp, Users, Eye, DollarSign } from 'lucide-react';
import { channels, Channel } from '../data/channels';
import ChannelCard from './ChannelCard';
import ChannelModal from './ChannelModal';

const ChannelGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'available' | 'sold'>('all');
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  const filteredChannels = channels.filter(channel => {
    const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         channel.niche.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || channel.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    totalChannels: channels.length,
    totalSubscribers: channels.reduce((sum, channel) => sum + channel.subscribers, 0),
    totalViews: channels.reduce((sum, channel) => sum + channel.totalViews, 0),
    totalValue: channels.reduce((sum, channel) => sum + channel.salePrice, 0),
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            YouTube Channel Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of high-quality, monetized YouTube channels across various niches
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <TrendingUp className="w-8 h-8 text-sky-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{stats.totalChannels}</div>
            <div className="text-sm text-gray-500">Total Channels</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <Users className="w-8 h-8 text-sky-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{formatNumber(stats.totalSubscribers)}</div>
            <div className="text-sm text-gray-500">Total Subscribers</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <Eye className="w-8 h-8 text-sky-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{formatNumber(stats.totalViews)}</div>
            <div className="text-sm text-gray-500">Total Views</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <DollarSign className="w-8 h-8 text-sky-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">${formatNumber(stats.totalValue)}</div>
            <div className="text-sm text-gray-500">Portfolio Value</div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search channels by name or niche..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as 'all' | 'available' | 'sold')}
            >
              <option value="all">All Channels</option>
              <option value="available">Available</option>
              <option value="sold">Sold</option>
            </select>
          </div>
        </motion.div>

        {/* Channel Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filteredChannels.map((channel, index) => (
            <ChannelCard
              key={channel.id}
              channel={channel}
              onViewDetails={setSelectedChannel}
              index={index}
            />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredChannels.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-gray-400 text-lg">No channels found matching your criteria.</div>
          </motion.div>
        )}
      </div>

      {/* Channel Modal */}
      <ChannelModal
        channel={selectedChannel}
        onClose={() => setSelectedChannel(null)}
      />
    </div>
  );
};

export default ChannelGrid;