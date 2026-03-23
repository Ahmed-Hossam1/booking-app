import { Link } from "react-router-dom";
import { popularToursData } from "../../data";
import TourCard from "../card/TourCard";
import Heading from "../Ui/Heading";
import SectionWrapper from "./SectionWrapper";
import { FaArrowRight } from "react-icons/fa6";

const PopularToursSection = () => {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between mb-6">
        <Heading title="find popular tours" />
        <Link
          to="/tours"
          className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1"
        >
          See all
          <FaArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {popularToursData.slice(0, 4).map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PopularToursSection;

