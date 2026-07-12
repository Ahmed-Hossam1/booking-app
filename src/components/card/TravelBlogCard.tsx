import { Link } from "react-router-dom";
import type { ITravelPackage } from "../../interface";
import HeartButton from "../Ui/HeartButton";

interface IProps {
  pkg: ITravelPackage;
}

const TravelBlogCard = ({ pkg }: IProps) => {
  return (
    <Link to={`/packages/${pkg.id}`} className="group cursor-pointer block relative">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
        <img
          src={pkg.image}
          alt={pkg.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <HeartButton
          id={pkg.id}
          type="package"
          title={pkg.title}
          image={pkg.image}
          price={pkg.price}
          location={pkg.tag}
          duration={pkg.duration}
          className="absolute top-4 right-4 z-10 shadow-sm"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-white rounded-lg text-sm font-medium text-heading shadow-sm">
            {pkg.tag}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold shadow">
            From ${pkg.price}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>{pkg.date}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>By {pkg.author}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="text-blue-600 font-medium">{pkg.duration}</span>
        </div>
        <h3 className="text-lg font-bold text-heading leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
          {pkg.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {pkg.activities.length} activities included
        </p>
      </div>
    </Link>
  );
};

export default TravelBlogCard;

