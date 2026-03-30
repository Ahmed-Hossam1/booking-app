import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  FaSearch,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";
import { popularToursData, travelPackagesData } from "../data";
import { hotelsData } from "../data/hotelsData";
import SectionWrapper from "../components/sections/SectionWrapper";

type TabType = "all" | "tours" | "hotels" | "packages";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [inputValue, setInputValue] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(inputValue);
    setSearchParams({ q: inputValue });
  };

  const q = query.toLowerCase();

  const matchedTours = popularToursData.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.location.toLowerCase().includes(q)
  );
  const matchedHotels = hotelsData.filter(
    (h) =>
      h.name.toLowerCase().includes(q) ||
      h.city.toLowerCase().includes(q) ||
      h.country.toLowerCase().includes(q)
  );
  const matchedPackages = travelPackagesData.filter(
    (p) =>
      p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)
  );

  const totalResults =
    matchedTours.length + matchedHotels.length + matchedPackages.length;

  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: "all", label: "All Results", count: totalResults },
    { id: "tours", label: "Tours", count: matchedTours.length },
    { id: "hotels", label: "Hotels", count: matchedHotels.length },
    { id: "packages", label: "Packages", count: matchedPackages.length },
  ];

  const showTours = activeTab === "all" || activeTab === "tours";
  const showHotels = activeTab === "all" || activeTab === "hotels";
  const showPackages = activeTab === "all" || activeTab === "packages";

  return (
    <div className="min-h-screen bg-gray-50 mt-8">
      {/* Search Hero Bar */}
      <div className="bg-[#05073C] py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
            Search Experiences
          </h1>
          <form onSubmit={handleSearch} className="flex gap-0 shadow-2xl rounded-2xl overflow-hidden">
            <div className="flex items-center flex-1 bg-white px-5 gap-3">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search tours, hotels, destinations..."
                className="flex-1 py-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#EB662B] hover:bg-[#d45a22] text-white px-8 font-bold text-sm transition-colors cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <SectionWrapper className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-[#EB662B]">Home</Link>
            <FaChevronRight className="w-3 h-3" />
            <span className="text-[#05073C] font-medium">
              Search{query ? `: "${query}"` : ""}
            </span>
          </nav>

          {query && (
            <p className="text-gray-500 text-sm mb-6">
              Found <span className="font-bold text-[#05073C]">{totalResults}</span> results for "
              <span className="text-[#EB662B] font-semibold">{query}</span>"
            </p>
          )}

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-t-xl transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white text-[#EB662B] border border-b-white border-gray-200 -mb-px"
                    : "text-gray-500 hover:text-[#05073C]"
                }`}
              >
                {tab.label}
                <span
                  className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                    activeTab === tab.id
                      ? "bg-[#EB662B]/10 text-[#EB662B]"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Empty state */}
          {!query && (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
              <FaSearch className="text-gray-300 text-6xl mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-400">
                Start Searching
              </h2>
              <p className="text-gray-400 mt-2">
                Enter a destination, tour name, or hotel to find experiences.
              </p>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
              <h2 className="text-2xl font-bold text-gray-400">No results found</h2>
              <p className="text-gray-400 mt-2">
                Try a different search term or browse our categories below.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                {["Paris", "Bali", "Tokyo", "Machu Picchu", "Safari"].map((s) => (
                  <button
                    key={s}
                    onClick={() => { setInputValue(s); setQuery(s); setSearchParams({ q: s }); }}
                    className="px-5 py-2 bg-[#EB662B]/10 text-[#EB662B] rounded-full text-sm font-semibold hover:bg-[#EB662B] hover:text-white transition cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tours */}
          {query && showTours && matchedTours.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#05073C] mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#EB662B] rounded-full inline-block" />
                Tours ({matchedTours.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedTours.map((tour) => (
                  <Link
                    key={tour.id}
                    to={`/tours/${tour.id}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                        <FaStar className="text-yellow-400" /> {tour.rating}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1 text-xs text-[#EB662B] font-semibold mb-2">
                        <FaMapMarkerAlt /> {tour.location}
                      </div>
                      <h3 className="text-sm font-bold text-[#05073C] line-clamp-2 group-hover:text-[#EB662B] transition-colors">{tour.title}</h3>
                      <div className="flex items-center justify-between mt-3">
                        <span className="flex items-center gap-1 text-xs text-gray-500"><FaClock /> {tour.duration}</span>
                        <span className="text-base font-black text-[#05073C]">${tour.price}<span className="text-xs font-normal text-gray-500">/person</span></span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Hotels */}
          {query && showHotels && matchedHotels.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#05073C] mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#EB662B] rounded-full inline-block" />
                Hotels ({matchedHotels.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedHotels.map((hotel) => (
                  <Link
                    key={hotel.id}
                    to={`/hotels/${hotel.id}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                        <FaStar className="text-yellow-400" /> {hotel.rating}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1 text-xs text-[#EB662B] font-semibold mb-2">
                        <FaMapMarkerAlt /> {hotel.city}, {hotel.country}
                      </div>
                      <h3 className="text-sm font-bold text-[#05073C] group-hover:text-[#EB662B] transition-colors">{hotel.name}</h3>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-gray-400">From</span>
                        <span className="text-base font-black text-[#05073C]">${hotel.price}<span className="text-xs font-normal text-gray-500">/night</span></span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Packages */}
          {query && showPackages && matchedPackages.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#05073C] mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#EB662B] rounded-full inline-block" />
                Packages ({matchedPackages.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedPackages.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/packages/${pkg.id}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={pkg.image} alt={pkg.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <span className="absolute top-3 left-3 bg-[#EB662B] text-white text-xs font-bold px-3 py-1 rounded-full">{pkg.tag}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-bold text-[#05073C] line-clamp-2 group-hover:text-[#EB662B] transition-colors">{pkg.title}</h3>
                      <div className="flex items-center justify-between mt-3">
                        <span className="flex items-center gap-1 text-xs text-gray-500"><FaClock /> {pkg.duration}</span>
                        <span className="text-base font-black text-[#05073C]">${pkg.price}<span className="text-xs font-normal text-gray-500">/pp</span></span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SearchPage;
