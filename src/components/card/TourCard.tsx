import { Link } from "react-router-dom";
import type { ITour } from "../../interface";

interface IProps {
  tour: ITour;
}

const TourCard = ({ tour }: IProps) => {
  return (
    <Link
      to={`/tours/${tour.id}`}
      className="block bg-white border border-[#E7E6E6] rounded-xl overflow-hidden hover:shadow-lg transition"
    >
      <div className="relative p-2 rounded-xl">
        <img
          src={tour.image}
          alt={tour.title}
          className="rounded-xl w-full h-44 object-cover"
        />
        {/* Floating white circle */}
        <span className="absolute bottom-0 right-4 translate-y-1/2 w-9 h-9 bg-white rounded-full" />
      </div>

      {/* Content */}
      <div className="px-5 pt-6 pb-4">
        {/* Location */}
        <p className="text-xs capitalize text-[#717171] mb-2">{tour.location}</p>

        {/* Title */}
        <h3 className="text-[15px] leading-6 font-medium text-[#05073C] line-clamp-2">
          {tour.title}
        </h3>

        {/* Rating */}
        <div className="mt-2 text-xs text-[#05073C]">
          ⭐ {tour.rating} ({tour.reviewCount})
        </div>

        <div className="border-t border-[#E7E6E6] mt-4 pt-3 flex items-center justify-between text-sm text-[#05073C]">
          <span>{tour.duration}</span>
          <span className="font-medium">From ${tour.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;

