import { useState } from "react";
import {
  FaCalendarCheck,
  FaConciergeBell,
  FaDumbbell,
  FaHeadset,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaSpa,
  FaStar,
  FaSwimmingPool,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Ui/Button";
import SectionWrapper from "../components/sections/SectionWrapper";
import { hotelsData } from "@/data/hotelsData";

const amenities = [
  { icon: <FaWifi />, name: "Free High-Speed WiFi" },
  { icon: <FaSwimmingPool />, name: "Infinity Pools" },
  { icon: <FaUtensils />, name: "Fine Dining" },
  { icon: <FaSpa />, name: "Luxury Spa" },
  { icon: <FaDumbbell />, name: "Fitness Center" },
  { icon: <FaConciergeBell />, name: "24/7 Concierge" },
];

const HotelsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");

  const cities = [
    "All",
    "Cairo",
    "Hurghada",
    "Sharm El Sheikh",
    "Alexandria",
    "Luxor",
  ];

  const filteredHotels = hotelsData.filter((hotel) => {
    const matchesSearch = hotel.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === "All" || hotel.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
            alt="Hotels Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Find Your Perfect Stay
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
            Discover luxury hotels, boutique stays, and cozy resorts tailored
            for your unforgettable journey.
          </p>
          <a href="#hotels-list" className="flex justify-center items-center">
            <Button className="px-10 py-4 rounded-full text-white text-lg font-bold shadow-xl transform transition hover:scale-105">
              Explore Now
            </Button>
          </a>
        </div>
      </section>

      {/* Stats / Benefits Bar */}
      <div className="bg-white border-b border-gray-100 py-8 relative z-20 -mt-10 mx-auto max-w-6xl rounded-xl shadow-xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center gap-4">
          <div className="bg-[#EB662B]/10 p-4 rounded-full">
            <FaShieldAlt className="text-[#EB662B] text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-[#05073C]">Best Price Guarantee</h4>
            <p className="text-sm text-gray-500">
              We match any price you find.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#EB662B]/10 p-4 rounded-full">
            <FaCalendarCheck className="text-[#EB662B] text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-[#05073C]">Free Cancellation</h4>
            <p className="text-sm text-gray-500">
              Flexible bookings for your peace of mind.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#EB662B]/10 p-4 rounded-full">
            <FaHeadset className="text-[#EB662B] text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-[#05073C]">24/7 Support</h4>
            <p className="text-sm text-gray-500">
              We're here whenever you need us.
            </p>
          </div>
        </div>
      </div>

      {/* Hotel Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#05073C]">
            Explore Our Destinations
          </h2>
          <p className="text-gray-500 mt-2">
            Take a glimpse at some of our most stunning properties.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hotelsData.slice(0, 4).map((hotel, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-2xl group"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <div
        id="hotels-list"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Search & Filter Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#05073C]">
              Available Hotels
            </h2>
            <p className="text-gray-500 mt-1">
              Showing the best results in your selected location.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 grow max-w-2xl bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
            <div className="grow">
              <input
                type="text"
                placeholder="Search hotel name..."
                className="w-full px-4 py-3 text-sm focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="h-10 w-px bg-gray-200 hidden sm:block" />
            <div className="min-w-37.5">
              <select
                className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent cursor-pointer font-medium"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Hotel Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[#05073C] font-bold shadow-sm flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  {hotel.rating}
                </div>
              </div>

              {/* Hotel Details */}
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#EB662B] uppercase tracking-wider mb-2">
                  <FaMapMarkerAlt />
                  {hotel.city}
                </div>
                <h3 className="text-xl font-bold text-[#05073C] mb-3 group-hover:text-[#EB662B] transition-colors">
                  {hotel.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-6">
                  Experience the ultimate comfort and hospitality with
                  world-class amenities and stunning views.
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">
                      Starts from
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-[#05073C]">
                        ${hotel.price}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        /night
                      </span>
                    </div>
                  </div>
                  <Link to={`/hotels/${hotel.id}`}>
                    <Button className="text-white text-sm px-7 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                      View Stay
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHotels.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-300">
            <h3 className="text-2xl font-bold text-gray-400">
              No matching hotels found.
            </h3>
            <p className="text-gray-400 mt-2">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>

      {/* Amenities Section */}
      <SectionWrapper className="bg-white py-24 px-6 md:px-12 rounded-3xl mb-20 shadow-sm border border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#05073C]">
            World-Class Amenities
          </h2>
          <p className="text-gray-500 mt-2">
            Everything you need for a comfortable and luxury stay.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {amenities.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 bg-[#EB662B]/5 rounded-2xl flex items-center justify-center text-[#EB662B] text-2xl group-hover:bg-[#EB662B] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">
                {item.icon}
              </div>
              <span className="text-sm font-bold text-[#05073C] text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/*  Rewards Section */}
      <SectionWrapper className="mb-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#05073C] p-8 md:p-16">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[#EB662B] font-bold tracking-widest uppercase text-sm">
              Join the Club
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
              Save up to <span className="text-[#EB662B]">20% extra</span> with
              our membership
            </h2>
            <p className="text-white/70 mt-6 text-lg">
              Sign up for free and get instant access to member-only prices on
              thousands of hotels worldwide.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="px-10 py-4 rounded-xl text-white font-bold">
                Join Now for Free
              </Button>
              <Button
                backgroundColor="transparent"
                className="px-10 py-4 rounded-xl text-white font-bold border border-white/20 hover:bg-white/5"
              >
                Learn More
              </Button>
            </div>
          </div>
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EB662B]/10 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#EB662B]/5 blur-3xl rounded-full -ml-20 -mb-20" />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HotelsPage;
