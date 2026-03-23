import { Link } from "react-router-dom";
import { popularToursData } from "../data";
import TourCard from "../components/card/TourCard";
import { FaArrowLeft } from "react-icons/fa6";

const ToursPage = () => {
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
            <h1 className="text-lg font-bold text-[#05073C]">Popular Tours</h1>
            <p className="text-xs text-gray-500">{popularToursData.length} tours available</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularToursData.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
