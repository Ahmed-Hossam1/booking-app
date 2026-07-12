import { Link } from "react-router-dom";
import type { ITour } from "../../interface";
import HeartButton from "../Ui/HeartButton";

interface IProps {
  tour: ITour;
}

const TourCard = ({ tour }: IProps) => {
  return (
    <Link
      to={`/tours/${tour.id}`}
      className="block bg-white dark:bg-[#11121a] border border-[#E7E6E6] dark:border-neutral-800 rounded-xl overflow-hidden hover:shadow-lg transition relative group"
    >
      <div className="relative p-2 rounded-xl">
        <img
          src={tour.image}
          alt={tour.title}
          className="rounded-xl w-full h-44 object-cover"
        />
        <HeartButton
          id={tour.id}
          type="tour"
          title={tour.title}
          image={tour.image}
          price={tour.price}
          location={tour.location}
          rating={tour.rating}
          reviewCount={tour.reviewCount}
          duration={tour.duration}
          className="absolute top-4 right-4 z-10 shadow-sm"
        />
        {/* Floating white circle */}
        <span className="absolute bottom-0 right-4 translate-y-1/2 w-9 h-9 bg-white dark:bg-[#11121a] rounded-full" />
      </div>

      {/* Content */}
      <div className="px-5 pt-6 pb-4">
        {/* Location */}
        <p className="text-xs capitalize text-[#717171] dark:text-gray-400 mb-2">{tour.location}</p>

        {/* Title */}
        <h3 className="text-[15px] leading-6 font-medium text-[#05073C] dark:text-white line-clamp-2">
          {tour.title}
        </h3>

        {/* Rating */}
        <div className="mt-2 text-xs text-[#05073C] dark:text-gray-300">
          ⭐ {tour.rating} ({tour.reviewCount})
        </div>

        <div className="border-t border-[#E7E6E6] dark:border-neutral-800 mt-4 pt-3 flex items-center justify-between text-sm text-[#05073C] dark:text-gray-350">
          <span className="dark:text-gray-400">{tour.duration}</span>
          <span className="font-medium dark:text-white">From ${tour.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;

