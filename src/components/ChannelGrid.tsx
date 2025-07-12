import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.ts";
import ChannelCard from "./ChannelCard";
import { Filter, DollarSign } from "lucide-react";
import ChannelModal from "./ChannelModal.tsx";
import { Channel } from "../data/channels.ts";


const ChannelGrid: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [filterStatus, setFilterStatus] = useState<"all" | "available" | "sold">("all");
  const [filterMonetization, setFilterMonetization] = useState<"all" | "monetized" | "non-monetized">("all");
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "channels"));
        const channelArray: Channel[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            channelName: data.channelName || "",
            channelNiche: data.channelNiche || "",
            channelSubscribers: data.channelSubscribers || "0",
            realtimeViews: data.realtimeViews || "0",
            salePrice: data.salePrice || "0",
            verificationStatus: data.verificationStatus || "",
            monetizationStatus: data.monetizationStatus || "",
            status: data.status || "",
            screenshotUrls: data.screenshotUrls || "",
            watchTime:data.watchTime,
            earningData:data.earningData,
            channelAge:data.channelAge,
            contentType:data.contentType,
            violation:data.violation,
            purchasePrice:data.purchasePrice,
            channelUrl:data.channelUrl,
            adsenseType: data.adsenseType || "", 
            channelProfile:data.channelProfile
          };
        });
        setChannels(channelArray);
        console.log("Fetched Channels:", channelArray);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchChannels();
  }, []);

const filteredChannels = channels.filter((channel) => {
 const statusMatch =
    filterStatus === "all" ||
    (filterStatus === "sold" && channel.status === "purchased") ||
    (filterStatus === "available" && channel.status !== "purchased");

  const monetizationMatch =
    filterMonetization === "all" ||
    (filterMonetization === "monetized" && channel.monetizationStatus === "Monetized") ||
    (filterMonetization === "non-monetized" && channel.monetizationStatus !== "Monetized");

  return statusMatch && monetizationMatch;
});


  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
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
            Explore our collection of high-quality, monetized YouTube channels
            across various niches
          </p>
        </motion.div>

        {/*Filters Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative col-span-1 md:col-span-1 lg:col-span-3">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
           <select
  className="w-full pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
  value={filterStatus}
  onChange={(e) =>
    setFilterStatus(e.target.value as "all" | "available" | "sold")
  }
>
  <option value="all">All Channels</option>
  <option value="available">Available</option>
  <option value="sold">Sold</option> {/* NOT purchased */}
</select>

          </div>

          <div className="relative col-span-1 md:col-span-1 lg:col-span-3">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="w-full pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
              value={filterMonetization}
              onChange={(e) =>
                setFilterMonetization(
                  e.target.value as "all" | "monetized" | "non-monetized"
                )
              }
            >
              <option value="all">All Types</option>
              <option value="monetized">Monetized</option>
              <option value="non-monetized">Non-Monetized</option>
            </select>
          </div>
        </motion.div>

        {/*  Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filteredChannels.map((channel) => (
            <ChannelCard
              key={channel.id}
              channelProfile={channel.channelProfile}
              screenshotUrls={channel.screenshotUrls}
              channelName={channel.channelName}
              channelNiche={channel.channelNiche}
              channelSubscribers={channel.channelSubscribers}
              realtimeViews={channel.realtimeViews}
              salePrice={channel.salePrice}
              status={channel.status}
              verificationStatus={channel.verificationStatus}
              monetizationStatus={channel.monetizationStatus}
              onViewDetails={() => setSelectedChannel(channel)}
            />
          ))}
        </motion.div>
        
      </div>
      {selectedChannel && (
  <ChannelModal
    channel={selectedChannel}
    onClose={() => setSelectedChannel(null)}
  />
)}

    
    </div>
  );
};

export default ChannelGrid;
