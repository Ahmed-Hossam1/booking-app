import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist, type ISavedItem } from "@/hooks/useWishlist";
import { FaHeart, FaTrash, FaMapMarkerAlt, FaStar, FaClock, FaHeartBroken, FaArrowRight } from "react-icons/fa";
import { toast } from "sonner";
import SectionWrapper from "@/components/sections/SectionWrapper";

const categories: { label: string; value: "all" | ISavedItem["type"] }[] = [
  { label: "All Items", value: "all" },
  { label: "Hotels", value: "hotel" },
  { label: "Tours", value: "tour" },
  { label: "Packages", value: "package" },
  { label: "Transport", value: "transport" },
  { label: "Activities", value: "activity" },
];

const SavedPage = () => {
  const { wishlist, toggleItem } = useWishlist();
  const [activeTab, setActiveTab] = useState<"all" | ISavedItem["type"]>("all");
  const navigate = useNavigate();

  const handleRemove = (item: ISavedItem, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(item);
    toast.success(`Removed "${item.title}" from saved items.`);
  };

  const handleBookNow = (item: ISavedItem, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Map details to the checkout format
    navigate("/checkout", {
      state: {
        type: item.type,
        name: item.title,
        image: item.image,
        price: item.price,
        priceLabel: item.type === "hotel" ? "/ night" : item.type === "transport" ? "/ trip" : "/ person",
        location: item.location,
        duration: item.duration,
      },
    });
  };

  const filteredItems = wishlist.filter(
    (item) => activeTab === "all" || item.type === activeTab
  );

  const getCategoryCount = (catValue: typeof activeTab) => {
    if (catValue === "all") return wishlist.length;
    return wishlist.filter((item) => item.type === catValue).length;
  };

  const getDetailsLink = (item: ISavedItem) => {
    switch (item.type) {
      case "hotel":
        return `/hotels/${item.id}`;
      case "tour":
        return `/tours/${item.id}`;
      case "package":
        return `/packages/${item.id}`;
      case "transport":
        return `/transportation/${item.id}`;
      default:
        return "/";
    }
  };

  return (
    <SectionWrapper className="bg-gray-50 min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#05073C] mb-2">Saved Items</h1>
          <p className="text-gray-500 font-medium">
            Manage your favorited hotels, tours, transport options and travel packages
          </p>
        </div>

        {/* Tab Selection */}
        {wishlist.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
            {categories.map((cat) => {
              const count = getCategoryCount(cat.value);
              const isActive = activeTab === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveTab(cat.value)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#EB662B] text-white shadow-md shadow-orange-500/10"
                      : "bg-white text-gray-500 hover:text-[#05073C] border border-gray-100 hover:border-gray-200 shadow-xs"
                  }`}
                >
                  {cat.label}
                  <span
                    className={`inline-flex items-center justify-center text-2xs px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Wishlist Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Link
                to={getDetailsLink(item)}
                key={`${item.type}-${item.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image & Heart Button Overlay */}
                <div className="relative h-56 w-full overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#EB662B] shadow-xs uppercase tracking-wide">
                    {item.type}
                  </span>

                  {/* Remove Button */}
                  <button
                    onClick={(e) => handleRemove(item, e)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-xs rounded-full flex items-center justify-center text-red-500 hover:text-red-600 hover:scale-110 active:scale-95 transition-all shadow-xs"
                    title="Remove from saved"
                  >
                    <FaHeart className="text-sm" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    {/* Location */}
                    {item.location && (
                      <div className="flex items-center gap-1 text-xs text-gray-400 font-semibold mb-2">
                        <FaMapMarkerAlt className="text-[#EB662B]" />
                        <span>{item.location}</span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#05073C] mb-2 leading-snug group-hover:text-[#EB662B] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                      {item.rating !== undefined && (
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400" />
                          <span className="text-[#05073C] font-bold">{item.rating}</span>
                          {item.reviewCount !== undefined && <span>({item.reviewCount})</span>}
                        </div>
                      )}
                      {item.duration && (
                        <div className="flex items-center gap-1">
                          <FaClock />
                          <span>{item.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price & Book Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                    <div>
                      <span className="text-2xs text-gray-400 uppercase font-bold tracking-wider">Price</span>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-xl font-black text-[#05073C]">${item.price}</span>
                        <span className="text-xs text-gray-400 font-medium">
                          {item.type === "hotel" ? "/night" : item.type === "transport" ? "/trip" : "/person"}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleBookNow(item, e)}
                      className="px-5 py-2.5 bg-[#05073C] hover:bg-[#EB662B] text-white hover:text-white text-xs font-bold rounded-xl transition-all duration-200 shadow-xs hover:shadow-md active:scale-95"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center max-w-xl mx-auto shadow-sm">
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHeartBroken className="text-4xl text-[#EB662B] opacity-80" />
            </div>
            <h3 className="text-2xl font-bold text-[#05073C] mb-2">No Saved Items Found</h3>
            <p className="text-gray-500 mb-8 leading-relaxed max-w-md mx-auto">
              You haven't saved any listings yet. Browse through our premium selection of hotels, tours, transport options, and packages to plan your dream vacation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/tours"
                className="inline-flex items-center justify-center gap-2 bg-[#EB662B] hover:bg-[#d45a25] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 text-sm"
              >
                Browse Tours <FaArrowRight />
              </Link>
              <Link
                to="/hotels"
                className="inline-flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-[#05073C] font-bold px-6 py-3 rounded-xl transition-all active:scale-95 text-sm border border-gray-100"
              >
                Find Hotels
              </Link>
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default SavedPage;
