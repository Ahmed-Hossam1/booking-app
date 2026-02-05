import TourCard from "../card/TourCard";
import Heading from "../Ui/Heading";
import SectionWrapper from "./SectionWrapper";

const PopularToursSection = () => {
  return (
    <SectionWrapper>
      <Heading title="find popular tours" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </SectionWrapper>
  );
};

export default PopularToursSection;
