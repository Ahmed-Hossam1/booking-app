import { Link } from "react-router-dom";
import TourCard from "../card/TourCard";
import Heading from "../Ui/Heading";
import SectionWrapper from "./SectionWrapper";

const PopularToursSection = () => {
  const destination = "egypt";
  return (
    <SectionWrapper>
      <Heading title="find popular tours" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        <Link to={`/explore/${destination}`}>
          <TourCard />
        </Link>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </SectionWrapper>
  );
};

export default PopularToursSection;
