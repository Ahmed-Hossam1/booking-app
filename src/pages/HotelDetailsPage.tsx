import { hotelsData } from "@/data/hotelsData";
import { FaCheck, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ActivityCard from "../components/card/ActivityCard";
import HotelGallerySlider from "../components/hotel/HotelGallerySlider";
import RoomCard from "../components/hotel/RoomCard";
import SectionWrapper from "../components/sections/SectionWrapper";
import Button from "../components/Ui/Button";
import { activitiesData } from "../data/activitiesData";

const HotelDetailsPage = () => {
    // Get the hotel ID from the URL
    const { hotelId } = useParams();

    // Find the hotel that matches this ID
    const hotel = hotelsData.find((h) => h.id.toString() === hotelId);

    // If the hotel is not found in the data, show an error message
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

    // fake reviews for the UI
    const reviews = [
        { id: 1, name: "Sarah Jenkins", avatar: "SJ", text: "Incredible stay! The views were absolutely breathtaking and the staff went above and beyond.", rating: 5 },
        { id: 2, name: "David Chen", avatar: "DC", text: "Very relaxing environment. The room was spacious and the amenities were top notch. Will definitely come back.", rating: 4.8 },
    ];

    // Get the rooms for this hotel 
    const hotelRooms = hotel.rooms || [];


    // Test Function when user clicks "Book Now"
    const handleBookRoom = (roomId: number) => {
        alert(`Booking room ID: ${roomId}! Redirecting to checkout...`);
    };

    return (
        <SectionWrapper className="bg-gray-50 min-h-screen pb-20 pt-8">

            {/* Top Navigation Path */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <div className="text-sm text-gray-500 font-medium flex items-center gap-2">
                    <Link to="/" className="hover:text-[#EB662B] transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/hotels" className="hover:text-[#EB662B] transition-colors">Hotels</Link>
                    <span>/</span>
                    <span className="text-[#05073C] font-bold">{hotel.name}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#05073C]">{hotel.name}</h1>
                        </div>

                        <p className="flex items-center gap-2 text-gray-500 font-medium">
                            <FaMapMarkerAlt className="text-[#EB662B]" />
                            {hotel.city}, {hotel.country}
                        </p>
                    </div>

                    <div className="text-right bg-blue-50 px-6 py-4 rounded-2xl w-full md:w-auto">
                        <div className="text-sm text-gray-500 font-medium mb-1">Excellent</div>
                        <div className="flex items-center gap-2 justify-end mb-1">
                            <span className="bg-[#05073C] text-white font-bold px-2 py-1 rounded-lg">{hotel.rating}</span>
                            <span className="text-[#05073C] font-bold">/ 5</span>
                        </div>
                        <div className="text-sm text-gray-400">{hotel.reviewCount} verified reviews</div>
                    </div>
                </div>

                {/* Image Gallery Slider  */}
                <HotelGallerySlider images={hotel.images} />

                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="flex-1">

                        {/* Hotel Description and Services */}
                        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8">
                            <h2 className="text-2xl font-bold text-[#05073C] mb-4">About this hotel</h2>
                            <div className="text-gray-600 leading-relaxed space-y-4">
                                <p>{hotel.description}</p>
                            </div>

                            <hr className="border-gray-100 my-8" />

                            <h3 className="text-xl font-bold text-[#05073C] mb-4">Services</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                                {hotel.Services.map((service, index) => (
                                    <div key={index} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <div className="bg-green-100 p-1.5 rounded-full text-green-600 text-xs">
                                            <FaCheck />
                                        </div>
                                        {service}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* AVAILABLE ROOMS SECTION */}
                        <div className="mb-8 scroll-mt-24" id="rooms">

                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-[#05073C] mb-2">Available Rooms</h2>
                                    <p className="text-gray-500 font-medium">Find the perfect room for your stay</p>
                                </div>
                            </div>

                            {/* If the hotel has rooms, show the filters and the list of rooms */}
                            {hotelRooms.length > 0 ? (
                                <>
                                    <div className="space-y-6">
                                        {/* Map over our room array and show a RoomCard for each room */}
                                        {hotelRooms.map((room) => (
                                            <RoomCard
                                                key={room.id}
                                                room={room}
                                                onBookNow={handleBookRoom}
                                            />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                /* If there are NO rooms added to the data at all */
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-sm">
                                    <h3 className="text-xl font-bold text-[#05073C] mb-2">No rooms available</h3>
                                    <p className="text-gray-500">Please check back later or contact the hotel for availability.</p>
                                </div>
                            )}
                        </div>

                        {/* GUEST REVIEWS SECTION */}
                        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-[#05073C] mb-6">Guest Reviews</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="bg-gray-50 p-6 rounded-2xl flex items-start gap-4">

                                        <div className="w-12 h-12 bg-[#05073C] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                            {review.avatar}
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-[#05073C]">{review.name}</h4>
                                            <div className="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className={review.rating < 5 ? "text-gray-300" : ""} />
                                            </div>
                                            <p className="text-sm text-gray-600 italic leading-relaxed">"{review.text}"</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM SECTION - SIMILAR PLACES */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-[#05073C] mb-8">Similar places you might like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Cut to first 4 activities and display */}
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
