import { Marquee } from "@/components/Ui/marquee";
import CustomerReviewSection from "../components/sections/CustomerReviewSection";
import Hero from "../components/sections/HeroSection";
import PopularThingsToDoSection from "../components/sections/PopularThingsToDoSection";
import PopularToursSection from "../components/sections/PopularToursSection";
import PromoBanner from "../components/sections/PromoBanner";
import TrendingDestinationSection from "../components/sections/TrendingDestinationSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import TravelPackagesSection from "../components/sections/TravelPackagesSection";
import { cities1, cities2 } from "@/data/hotelsData";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyChooseUsSection />
      <TrendingDestinationSection />
      <div className="relative my-12 flex w-full flex-col items-center justify-center overflow-hidden">
        {/* Gradient Fade Left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10" />

        {/* Gradient Fade Right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10" />

        <Marquee className="[--duration:15s] gap-6">
          {cities1.map((city, idx) => (
            <span
              key={idx}
              className="px-6 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium shadow-sm hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            >
              {city}
            </span>
          ))}
        </Marquee>

        <Marquee reverse className="[--duration:15s] gap-6 mt-4">
          {cities2.map((city, idx) => (
            <span
              key={idx}
              className="px-6 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium shadow-sm hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              {city}
            </span>
          ))}
        </Marquee>
      </div>
      <PopularToursSection />
      <PromoBanner />
      <PopularThingsToDoSection />
      <TravelPackagesSection />
      <CustomerReviewSection />
    </>
  );
};

export default HomePage;
