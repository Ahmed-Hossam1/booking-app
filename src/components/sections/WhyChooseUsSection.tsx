import { whyChooseData } from "../../data";
import FeatureCard from "../card/FeatureCard ";
import Heading from "../Ui/Heading";
import SectionWrapper from "./SectionWrapper";

const WhyChooseUsSection = () => {
  const data = whyChooseData.map((item) => (
    <FeatureCard {...item} key={item.id} />
  ));
  return (
    <SectionWrapper>
      <Heading title="why choose us" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{data}</div>
    </SectionWrapper>
  );
};

export default WhyChooseUsSection;
