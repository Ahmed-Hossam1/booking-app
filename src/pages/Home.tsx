import Hero from "../components/sections/HeroSection";
import PopularToursSection from "../components/sections/PopularToursSection";
import PromoBanner from "../components/sections/PromoBanner";
import TrendingDestinationSection from "../components/sections/TrendingDestinationSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyChooseUsSection />
      <TrendingDestinationSection />
      <PopularToursSection />
      <PromoBanner /> 
    </>
  );
};

export default HomePage;
