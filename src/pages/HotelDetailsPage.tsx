import { useParams, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Button from "../components/Ui/Button";
import { activitiesData } from "../data/activitiesData";
import ActivityCard from "../components/card/ActivityCard";
import SectionWrapper from "../components/sections/SectionWrapper";
import { hotelsData } from "@/data/hotelsData";

const HotelDetailsPage = () => {
    const { hotelId } = useParams();

    // Find the hotel by ID 
    const hotel = hotelsData.find((h) => h.id.toString() === hotelId);

    if (!hotel) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
                <h2 className="text-3xl font-bold text-[#05073C] mb-4">Hotel Not Found</h2>
                <p className="text-gray-500 mb-8">It seems we couldn't find the hotel you're looking for.</p>
                <Link to="/hotels">
                    <Button className="px-8 py-3 rounded-xl text-white font-bold">Back to Hotels</Button>
                </Link>
            </div>
        );
    }

    // Mock data reviews for the hotel
    const reviews = [
        { id: 1, name: "Sarah Jenkins", avatar: "SJ", text: "Incredible stay! The views were absolutely breathtaking and the staff went above and beyond.", rating: 5 },
        { id: 2, name: "David Chen", avatar: "DC", text: "Very relaxing environment. The room was spacious and the amenities were top notch. Will definitely come back.", rating: 4.8 },
    ];

    return (
        <SectionWrapper>
            {/* Path Info  */}
            <div className="bg-white py-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
                    <div className="text-sm text-gray-400 font-medium">
                        <Link to="/" className="hover:text-[#EB662B] transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/hotels" className="hover:text-[#EB662B] transition-colors">Hotels</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#05073C] font-bold">{hotel.name}</span>
                    </div>

                    <div className="text-center sm:text-right">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#05073C]">{hotel.name}</h1>
                        <p className="flex items-center justify-center sm:justify-end gap-1 text-gray-500 mt-1">
                            <FaMapMarkerAlt className="text-[#EB662B] text-sm" />
                            {hotel.city}, {hotel.country}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">

                {/* IMAGE GALLERY */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
                    {/* Main big image */}
                    <div className="md:col-span-2 h-[400px] sm:h-[500px] rounded-3xl overflow-hidden group">
                        <img
                            src={hotel.images[0]}
                            alt={`${hotel.name} view 1`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Smaller side images */}
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:col-span-1 h-[200px] sm:h-auto md:h-[500px]">
                        <div className="h-full md:h-[242px] rounded-3xl overflow-hidden group">
                            <img
                                src={hotel.images[1]}
                                alt={`${hotel.name} view 2`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="h-full md:h-[242px] rounded-3xl overflow-hidden group">
                            <img
                                src={hotel.images[2]}
                                alt={`${hotel.name} view 3`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row gap-12">
                    {/* LEFT COLUMN   */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[#05073C] mb-4">About the place</h2>
                        <div className="text-gray-500 leading-relaxed space-y-4 mb-10">
                            <p>{hotel.description}</p>
                        </div>

                        <hr className="border-gray-200 mb-10" />

                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-12">
                            {hotel.Services.map((Service, index) => {
                                return (
                                    <div key={index} className="text-sm text-[#05073C] font-medium capitalize whitespace-nowrap bg-gray-100 px-3 py-1 rounded-md">
                                        {Service}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/*  RIGHT COLUMN */}
                    <div className="w-full lg:w-[400px]">
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl lg:-mt-10 sticky top-24">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-[#05073C]">Start Booking</h3>
                                    <div className="flex items-baseline gap-2 mt-2">
                                        <span className="text-4xl font-black text-[#EB662B]">${hotel.price}</span>
                                        <span className="text-lg text-gray-400 font-medium">per Day</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 bg-yellow-100/50 px-3 py-1.5 rounded-xl text-sm font-bold text-[#05073C]">
                                    <FaStar className="text-yellow-500" />
                                    {hotel.rating} <span className="text-gray-400 font-normal ml-1">({hotel.reviewCount})</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <label className="block text-sm font-bold text-[#05073C] mb-2">Check-in</label>
                                    <input type="date" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EB662B]/50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#05073C] mb-2">Check-out</label>
                                    <input type="date" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EB662B]/50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#05073C] mb-2">Guests</label>
                                    <select className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EB662B]/50 cursor-pointer text-[#05073C]">
                                        <option>1 Guest</option>
                                        <option>2 Guests</option>
                                        <option>3 Guests</option>
                                        <option>4+ Guests</option>
                                    </select>
                                </div>
                            </div>

                            <Button className="w-full py-4 text-white text-lg rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                                Book Now!
                            </Button>
                        </div>
                    </div>
                </div>

                {/* REVIEWS SECTION */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-[#05073C] mb-8">Guest Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#05073C] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#05073C]">{review.name}</h4>
                                    <div className="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className={review.rating < 5 ? "text-gray-300" : ""} />
                                    </div>
                                    <p className="text-sm text-gray-500 italic">"{review.text}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* TREASURE TO CHOOSE   */}
                <div className="mt-24">
                    <h2 className="text-2xl font-bold text-[#05073C] mb-8">Treasure to Choose</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {activitiesData.slice(0, 4).map((activity) => (
                            <ActivityCard key={activity.id} activity={activity} />
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default HotelDetailsPage;
