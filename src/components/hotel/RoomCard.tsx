import React, { useState } from 'react';
import { FaWifi, FaTv, FaSnowflake, FaGlassMartiniAlt, FaBed, FaRulerCombined, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { IRoom } from '../../interface';
import Button from '../Ui/Button';

interface RoomCardProps {
    room: IRoom;
    onBookNow: (roomId: number) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onBookNow }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    //  next image
    const nextImg = () => {
        if (currentImgIndex === room.images.length - 1) {
            setCurrentImgIndex(0);
        } else {
            setCurrentImgIndex(currentImgIndex + 1);
        }
    };

    //   previous image
    const prevImg = () => {
        if (currentImgIndex === 0) {
            setCurrentImgIndex(room.images.length - 1);
        } else {
            setCurrentImgIndex(currentImgIndex - 1);
        }
    };

    // pick the right icon 
    const getIcon = (icon: string) => {
        const text = icon.toLowerCase();

        if (text.includes('wifi')) {
            return <FaWifi className="text-[#EB662B]" />;
        } else if (text.includes('tv')) {
            return <FaTv className="text-[#EB662B]" />;
        } else if (text.includes('ac') || text.includes('air conditioning')) {
            return <FaSnowflake className="text-[#EB662B]" />;
        } else if (text.includes('mini bar')) {
            return <FaGlassMartiniAlt className="text-[#EB662B]" />;
        } else {
            // Default icon 
            return <span className="w-1.5 h-1.5 rounded-full bg-[#EB662B] inline-block"></span>;
        }
    };

    return (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row group mb-6">

            {/* Left Side: Image Gallery */}
            <div className="relative w-full md:w-2/5 h-[300px] md:h-auto overflow-hidden">

                {/* Images sliding container */}
                <div
                    className="w-full h-full flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
                >
                    {room.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Room image ${index + 1}`}
                            className="w-full h-full object-cover shrink-0"
                        />
                    ))}
                </div>

                {/* Arrow buttons  */}
                {room.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImg}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#05073C] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <FaChevronLeft className="text-sm" />
                        </button>
                        <button
                            onClick={nextImg}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#05073C] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <FaChevronRight className="text-sm" />
                        </button>
                    </>
                )}

                {/* Badge for best value */}
                {room.hasBestValueBadge === true && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                        Best Value
                    </div>
                )}

                {/* Small dots for images */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {room.images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1.5 rounded-full transition-all ${index === currentImgIndex ? 'bg-white w-3' : 'bg-white/60 w-1.5'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Right Side: Room Details */}
            <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between">

                <div>
                    {/* Title and Price */}
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-[#05073C] group-hover:text-[#EB662B] transition-colors">{room.name}</h3>
                        <div className="text-right">
                            <span className="text-2xl font-black text-[#05073C]">${room.price}</span>
                            <span className="text-sm text-gray-500 block">/ night</span>
                        </div>
                    </div>

                    {/* Basic Info [beds, size, type] */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6 font-medium">
                        <span className="flex items-center gap-1.5">
                            <FaBed className="text-[#EB662B]" /> {room.beds} {room.beds > 1 ? 'Beds' : 'Bed'}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FaRulerCombined className="text-[#EB662B]" /> {room.size} m²
                        </span>
                        <span className="bg-[#05073C]/5 px-2 py-0.5 rounded-md text-[#05073C]">
                            {room.type}
                        </span>
                    </div>

                    {/* icon List */}
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-[#05073C] mb-3">services</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {room.amenities.map((icon, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                    {getIcon(icon)}
                                    <span>{icon}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* check if the room is Available or Booked */}
                <div className="flex justify-between items-center pt-5 border-t border-gray-100">
                    <div className="text-sm font-medium">
                        {room.status === 'Available' ? (
                            <span className="text-green-500 flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm"></span>
                                Available
                            </span>
                        ) : (
                            <span className="text-red-500 flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                                Sold Out
                            </span>
                        )}
                    </div>

                    <Button
                        className="px-8 py-3 rounded-xl font-bold text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
                        onClick={() => onBookNow(room.id)}
                        disabled={room.status === 'Booked'}
                    >
                        {room.status === 'Available' ? 'Book Now' : 'Sold Out'}
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default RoomCard;
