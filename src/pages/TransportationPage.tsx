import { useState } from "react";
import { FaBus, FaCar, FaShuttleVan } from "react-icons/fa";
import TransportationHeader from "../components/transportation/TransportationHeader";
import TransportationFilters from "../components/transportation/TransportationFilters";
import TransportationList from "../components/transportation/TransportationList";
import SectionWrapper from "../components/sections/SectionWrapper";
import Button from "../components/Ui/Button";
import { transportationData } from "../data/transportationData";


const TransportationPage = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  //  Filter
  const filteredData = transportationData
    .filter((item) =>
      selectedType === "All" ? true : item.type === selectedType
    )
    // Sort
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <TransportationHeader />

      {/* Info Bar */}
      <div className="bg-white border-b border-gray-100 py-8 relative z-20 -mt-10 mx-auto max-w-6xl rounded-xl shadow-xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center gap-4">
          <div className="bg-[#EB662B]/10 p-4 rounded-full">
            <FaBus className="text-[#EB662B] text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-[#05073C]">Comfortable Buses</h4>
            <p className="text-sm text-gray-500">
              Spacious seats for long trips.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#EB662B]/10 p-4 rounded-full">
            <FaShuttleVan className="text-[#EB662B] text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-[#05073C]">Private Vans</h4>
            <p className="text-sm text-gray-500">
              Perfect for small groups.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#EB662B]/10 p-4 rounded-full">
            <FaCar className="text-[#EB662B] text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-[#05073C]">Premium Cars</h4>
            <p className="text-sm text-gray-500">
              Flexible and personal travel.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        id="transportation-list"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#05073C]">
            Available Transportation
          </h2>
          <p className="text-gray-500 mt-1">
            Browse and book the best ride for your journey.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10">
          <TransportationFilters
            selectedType={selectedType}
            sortOrder={sortOrder}
            onTypeChange={setSelectedType}
            onSortChange={setSortOrder}
          />
        </div>

        {/* Transportation Cards Grid */}
        <TransportationList data={filteredData} />
      </div>

      {/* Banner Section */}
      <SectionWrapper className="mb-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#05073C] p-8 md:p-16">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[#EB662B] font-bold tracking-widest uppercase text-sm">
              Travel Smart
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
              Get <span className="text-[#EB662B]">15% off</span> your first
              ride
            </h2>
            <p className="text-white/70 mt-6 text-lg">
              Sign up today and enjoy exclusive discounts on all transportation
              bookings across Egypt.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="px-10 py-4 rounded-xl text-white font-bold">
                Sign Up Now
              </Button>
              <Button
                backgroundColor="transparent"
                className="px-10 py-4 rounded-xl text-white font-bold border border-white/20 hover:bg-white/5"
              >
                Learn More
              </Button>
            </div>
          </div>
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EB662B]/10 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#EB662B]/5 blur-3xl rounded-full -ml-20 -mb-20" />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TransportationPage;
