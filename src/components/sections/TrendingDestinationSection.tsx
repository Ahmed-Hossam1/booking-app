import { Link } from "react-router-dom";
import { trendingDestinationsData } from "../../data";
import DestinationCard from "../card/DestinationCard";
import Heading from "../Ui/Heading";
import SectionWrapper from "./SectionWrapper";

const TrendingDestinationSection = () => {
  const content = trendingDestinationsData.map((item) => (
    <Link to={`/explore/${item.title}`} key={item.id}>
      <DestinationCard {...item} />
    </Link>
  ));
  return (
    <SectionWrapper >
      <Heading title="trending destination" />
      {/* Cards */}
      <div className=" grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {content}
      </div>

    </SectionWrapper>
  );
};

export default TrendingDestinationSection;
