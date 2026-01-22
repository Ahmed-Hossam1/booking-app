import { trendingDestinationsData } from "../../data";
import Bullets from "../Ui/Bullets";
import DestinationCard from "../card/DestinationCard";
import Heading from "../Ui/Heading";
import SectionWrapper from "./SectionWrapper";

const TrendingDestinationSection = () => {
  const content = trendingDestinationsData.map((item) => (
    <DestinationCard {...item} key={item.id} />
  ));
  return (
    <SectionWrapper>
      <Heading title="trending destination" />
      {/* Cards */}
      <div className=" grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {content}
      </div>

      {/* Bullets */}
      <div className="mt-20 flex items-center justify-center gap-3">
        <Bullets />
        <Bullets />
        <Bullets />
        <Bullets />
      </div>
    </SectionWrapper>
  );
};

export default TrendingDestinationSection;
