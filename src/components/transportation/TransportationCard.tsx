import { FaStar, FaClock, FaUsers, FaRoute } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import type { ITransportation } from "../../interface";
import HeartButton from "../Ui/HeartButton";

interface IProps {
  transport: ITransportation;
}

const TransportationCard = ({ transport }: IProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full relative">
      {/* Image */}
      <Link to={`/transportation/${transport.id}`}>
        <div className="relative h-56 overflow-hidden">
          <img
            src={transport.image}
            alt={transport.type}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <HeartButton
            id={transport.id}
            type="transport"
            title={`${transport.type} — ${transport.route}`}
            image={transport.image}
            price={transport.price}
            location={transport.route}
            rating={transport.rating}
            duration={transport.duration}
            className="absolute top-4 left-4 z-10 shadow-sm"
          />
          {/* Rating */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[#05073C] font-bold shadow-sm flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            {transport.rating}
          </div>
        </div>
      </Link>

      {/* Card body */}
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#EB662B] uppercase tracking-wider mb-2">
          <FaRoute />
          {transport.route}
        </div>

        <div className="flex items-center gap-5 text-sm text-gray-500 mb-6">
          <span className="flex items-center gap-1.5">
            <FaUsers className="text-[#05073C]/60" />
            {transport.seats} seats
          </span>
          <span className="flex items-center gap-1.5">
            <FaClock className="text-[#05073C]/60" />
            {transport.departureTime}
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
          <div>
            <p className="text-xs text-gray-400 uppercase font-bold">
              Starts from
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#05073C]">
                ${transport.price}
              </span>
              <span className="text-sm text-gray-500 font-medium">/trip</span>
            </div>
          </div>
          <Link to={`/transportation/${transport.id}`}>
            <Button className="text-white text-sm px-7 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
              see details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransportationCard;
