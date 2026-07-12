import {
  FaCheck,
  FaClock,
  FaBuilding,
  FaRoute,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "../components/Ui/Button";
import SectionWrapper from "../components/sections/SectionWrapper";
import { transportationData } from "../data/transportationData";

const TransportationDetailsPage = () => {
  const navigate = useNavigate();
  // Get the transport ID from the URL
  const { transportId } = useParams();

  // Find the transport that matches this ID
  const transport = transportationData.find(
    (t) => t.id.toString() === transportId
  );

  // If not found, show error message  
  if (!transport) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-bold text-[#05073C] mb-4">
          Transport Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          We couldn't find the transportation option you're looking for.
        </p>
        <Link to="/transportation">
          <Button className="px-8 py-3 rounded-xl text-white font-bold">
            Back to Transportation
          </Button>
        </Link>
      </div>
    );
  }


  // Mock reviews for the UI
  const reviews = [
    {
      id: 1,
      name: "Ahmed Hassan",
      avatar: "AH",
      text: "Very comfortable ride! The driver was professional and the vehicle was spotless. Highly recommend.",
      rating: 5,
    },
    {
      id: 2,
      name: "Maria Lopez",
      avatar: "ML",
      text: "Arrived on time and the seats were very comfortable. Great value for money. Will book again!",
      rating: 4.8,
    },
  ];

  return (
    <SectionWrapper className="bg-gray-50 min-h-screen pb-20 pt-8">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-sm text-gray-500 font-medium flex items-center gap-2">
          <Link
            to="/"
            className="hover:text-[#EB662B] transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            to="/transportation"
            className="hover:text-[#EB662B] transition-colors"
          >
            Transportation
          </Link>
          <span>/</span>
          <span className="text-[#05073C] font-bold">
            {transport.type} — {transport.route}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#05073C]">
                {transport.route}
              </h1>
            </div>
            <p className="flex items-center gap-2 text-gray-500 font-medium">
              <FaBuilding className="text-[#EB662B]" />
              {transport.company}
            </p>
          </div>

          <div className="text-right bg-blue-50 px-6 py-4 rounded-2xl w-full md:w-auto">
            <div className="text-sm text-gray-500 font-medium mb-1">
              Rating
            </div>
            <div className="flex items-center gap-2 justify-end mb-1">
              <span className="bg-[#05073C] text-white font-bold px-2 py-1 rounded-lg">
                {transport.rating}
              </span>
              <span className="text-[#05073C] font-bold">/ 5</span>
            </div>
            <div className="text-sm text-gray-400">Verified reviews</div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {transport.images.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl ${index === 0 ? "md:col-span-2 md:row-span-2 h-64 md:h-full" : "h-48 md:h-56"}`}
            >
              <img
                src={img}
                alt={`${transport.type} ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Content*/}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-[#05073C] mb-4">
                About this ride
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {transport.description}
              </p>

              <hr className="border-gray-100 my-8" />

              <h3 className="text-xl font-bold text-[#05073C] mb-4">
                Features
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                {transport.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-600 font-medium"
                  >
                    <div className="bg-green-100 p-1.5 rounded-full text-green-600 text-xs">
                      <FaCheck />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Guest Reviews */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#05073C] mb-6">
                Traveler Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-gray-50 p-6 rounded-2xl flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-[#05073C] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#05073C]">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar
                          className={
                            review.rating < 5 ? "text-gray-300" : ""
                          }
                        />
                      </div>
                      <p className="text-sm text-gray-600 italic leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-[380px] shrink-0">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 sticky top-8">
              <h3 className="text-xl font-bold text-[#05073C] mb-6">
                Booking Summary
              </h3>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-[#EB662B]">
                  ${transport.price}
                </span>
                <span className="text-gray-500 font-medium">/trip</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaRoute className="text-[#EB662B]" />
                  <span className="font-medium">{transport.route}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaUsers className="text-[#EB662B]" />
                  <span className="font-medium">
                    {transport.seats} seats available
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaClock className="text-[#EB662B]" />
                  <span className="font-medium">
                    Departure: {transport.departureTime}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaClock className="text-[#EB662B]" />
                  <span className="font-medium">
                    Duration: {transport.duration}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaBuilding className="text-[#EB662B]" />
                  <span className="font-medium">{transport.company}</span>
                </div>
              </div>

              <Button
                className="w-full py-4 rounded-xl text-white font-bold text-lg hover:shadow-lg transition-all"
                onClick={() => {
                  if (!transport) return;
                  navigate("/checkout", {
                    state: {
                      type: "transport",
                      name: `${transport.type} — ${transport.route}`,
                      image: transport.images[0] || transport.image,
                      price: transport.price,
                      priceLabel: "/ trip",
                      location: transport.route,
                      duration: transport.duration,
                    },
                  });
                }}
              >
                Book Now
              </Button>

              <p className="text-xs text-center text-gray-400 mt-4">
                Free cancellation up to 24 hours before departure
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TransportationDetailsPage;
