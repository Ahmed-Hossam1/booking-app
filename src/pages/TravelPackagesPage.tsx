import { Link } from "react-router-dom";
import { travelPackagesData } from "../data";
import TravelBlogCard from "../components/card/TravelBlogCard";
import { FaArrowLeft } from "react-icons/fa6";

const TravelPackagesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm font-medium transition"
          >
            <FaArrowLeft />
            Back
          </Link>
          <div className="h-5 w-px bg-gray-200" />
          <div>
            <h1 className="text-lg font-bold text-[#05073C]">All Travel Packages</h1>
            <p className="text-xs text-gray-500">{travelPackagesData.length} packages available</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPackagesData.map((pkg) => (
            <TravelBlogCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPackagesPage;
