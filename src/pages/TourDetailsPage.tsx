import { useParams, Link } from "react-router-dom";
import { popularToursData } from "../data";
import { FaArrowLeft, FaStar, FaClock, FaLocationDot } from "react-icons/fa6";
import SectionWrapper from "@/components/sections/SectionWrapper";

const TourDetailsPage = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const tour = popularToursData.find((t) => t.id === Number(tourId));

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-700">Tour not found</h2>
        <Link
          to="/"
          className="text-blue-600 hover:underline flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <SectionWrapper className="min-h-screen bg-gray-50">
      {/* Gallery - Bento Grid Style */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-h-87.5 md:h-125 rounded-2xl overflow-hidden relative">
          {/* Main Image */}
          <div className="md:col-span-2 md:row-span-2 overflow-hidden relative group">
            <img
              src={tour.gallery[0] || tour.image}
              alt={tour.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Smaller Images */}
          {tour.gallery.slice(1, 5).map((img, idx) => (
            <div
              key={idx}
              className="hidden md:block overflow-hidden relative group"
            >
              <img
                src={img}
                alt={`${tour.title}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm font-medium transition"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left — Info + Itinerary */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title + Meta */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <FaLocationDot className="text-blue-600" />
              <span>{tour.location}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#05073C] leading-tight">
              {tour.title}
            </h1>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                {tour.rating} ({tour.reviewCount} reviews)
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="text-blue-600" />
                {tour.duration}
              </span>
            </div>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              {tour.description}
            </p>
          </div>

          {/* Itinerary */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#05073C] mb-5">Itinerary</h2>
            <ol className="relative border-l-2 border-blue-100 space-y-6 pl-6">
              {tour.itinerary.map((step, idx) => (
                <li key={idx} className="relative">
                  <span className="absolute -left-[1.35rem] w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xs font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-gray-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right — Booking */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6 space-y-4">
            <div className="text-3xl font-bold text-blue-600">
              ${tour.price}
              <span className="text-base font-normal text-gray-500">
                {" "}
                / person
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaStar className="text-yellow-400" />
              <span>
                {tour.rating} · {tour.reviewCount} reviews
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaClock className="text-blue-600" />
              <span>{tour.duration}</span>
            </div>

            <hr className="border-gray-100" />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition text-sm">
              Book Now
            </button>
            <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-xl transition text-sm">
              Save Tour
            </button>

            <p className="text-xs text-gray-400 text-center">
              Free cancellation up to 24h before
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TourDetailsPage;
