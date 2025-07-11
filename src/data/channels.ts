export interface Channel {
  id: string;
  name: string;
  thumbnail: string;
  niche: string;
  subscribers: number;
  totalViews: number;
  realtimeViews: number;
  watchTime: number;
  earnings: number;
  channelAge: string;
  contentType: string;
  adsenseType: string;
  violationStatus: string;
  purchasePrice: number;
  salePrice: number;
  isMonetized: boolean;
  isVerified: boolean;
  status: 'available' | 'sold';
}

export const channels: Channel[] = [
  {
    id: '1',
    name: 'Tech Reviews Pro',
    thumbnail: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    niche: 'Technology',
    subscribers: 125000,
    totalViews: 2400000,
    realtimeViews: 1200,
    watchTime: 18000,
    earnings: 2800,
    channelAge: '2 years',
    contentType: 'Reviews & Tutorials',
    adsenseType: 'Approved',
    violationStatus: 'Clean',
    purchasePrice: 8000,
    salePrice: 12000,
    isMonetized: true,
    isVerified: true,
    status: 'available'
  },
  {
    id: '2',
    name: 'Cooking Mastery',
    thumbnail: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    niche: 'Food & Cooking',
    subscribers: 89000,
    totalViews: 1800000,
    realtimeViews: 850,
    watchTime: 12000,
    earnings: 1900,
    channelAge: '1.5 years',
    contentType: 'Recipe Videos',
    adsenseType: 'Approved',
    violationStatus: 'Clean',
    purchasePrice: 5500,
    salePrice: 8500,
    isMonetized: true,
    isVerified: false,
    status: 'sold'
  },
  {
    id: '3',
    name: 'Fitness Journey',
    thumbnail: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    niche: 'Health & Fitness',
    subscribers: 156000,
    totalViews: 3200000,
    realtimeViews: 1800,
    watchTime: 24000,
    earnings: 3500,
    channelAge: '3 years',
    contentType: 'Workout Videos',
    adsenseType: 'Approved',
    violationStatus: 'Clean',
    purchasePrice: 12000,
    salePrice: 18000,
    isMonetized: true,
    isVerified: true,
    status: 'available'
  },
  {
    id: '4',
    name: 'Gaming Legends',
    thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    niche: 'Gaming',
    subscribers: 234000,
    totalViews: 4800000,
    realtimeViews: 2400,
    watchTime: 36000,
    earnings: 4200,
    channelAge: '2.5 years',
    contentType: 'Gaming Content',
    adsenseType: 'Approved',
    violationStatus: 'Clean',
    purchasePrice: 15000,
    salePrice: 22000,
    isMonetized: true,
    isVerified: true,
    status: 'sold'
  },
  {
    id: '5',
    name: 'Travel Diaries',
    thumbnail: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    niche: 'Travel & Lifestyle',
    subscribers: 76000,
    totalViews: 1400000,
    realtimeViews: 650,
    watchTime: 9800,
    earnings: 1600,
    channelAge: '1 year',
    contentType: 'Travel Vlogs',
    adsenseType: 'Approved',
    violationStatus: 'Clean',
    purchasePrice: 4500,
    salePrice: 7000,
    isMonetized: true,
    isVerified: false,
    status: 'available'
  },
  {
    id: '6',
    name: 'Educational Hub',
    thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    niche: 'Education',
    subscribers: 98000,
    totalViews: 2100000,
    realtimeViews: 1100,
    watchTime: 15000,
    earnings: 2300,
    channelAge: '2 years',
    contentType: 'Educational Content',
    adsenseType: 'Approved',
    violationStatus: 'Clean',
    purchasePrice: 7000,
    salePrice: 10500,
    isMonetized: true,
    isVerified: true,
    status: 'available'
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'John Smith',
    rating: 5,
    message: 'Abbas helped me find the perfect YouTube channel for my business. The process was smooth and professional!',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    rating: 5,
    message: 'Excellent service! Bought a monetized channel and it exceeded my expectations. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Mike Chen',
    rating: 5,
    message: 'Professional, trustworthy, and delivered exactly what was promised. Will definitely work with Abbas again.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '4',
    name: 'Emma Davis',
    rating: 5,
    message: 'Great experience! The channel I purchased is performing well and the support was outstanding.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];