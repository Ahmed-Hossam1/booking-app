import { Link } from "react-router-dom";
import { trendingDestinationsData } from "../../data";
import DestinationCard from "../card/DestinationCard";
import Heading from "../Ui/Heading";
import SectionWrapper from "./SectionWrapper";
import { FaArrowRight } from "react-icons/fa6";

const TrendingDestinationSection = () => {
  const content = trendingDestinationsData.slice(0, 8).map((item) => (
    <Link to={`/explore/${item.title}`} key={item.id}>
      <DestinationCard {...item} />
    </Link>
  ));
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between mb-6">
        <Heading title="trending destination" />
        <Link
          to="/destinations"
          className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1"
        >
          See all
          <FaArrowRight />
        </Link>
      </div>
      {/* Cards */}
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {content}
      </div>
    </SectionWrapper>
  );
};

export default TrendingDestinationSection;

