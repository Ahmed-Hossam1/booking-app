// interface PromoBannerProps {
//   title: string;
//   highlight?: string;
//   subtitle?: string;
//   ctaText: string;
//   onCtaClick?: () => void;
//   image: string;
// }

import Button from "../Ui/Button";
import SectionWrapper from "./SectionWrapper";

const PromoBanner = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left content */}
        <div className="relative z-10 px-6 py-12 md:px-12 lg:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05073C] leading-snug">
            Grab up to <span className="text-brand"> 35% off</span> on your
            favorite Destination
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-md">
            Limited time offer, don't miss the opportunity
          </p>

          <Button
            className="mt-6 inline-flex items-center justify-center
                       rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white
                       hover:bg-brand-strong transition"
          >
            Book Now
          </Button>
        </div>

        {/* Right image */}
        <div className="flex justify-between">
          <img
            src={"/images/Promo.jpeg"}
            alt="Promo"
            className=" w-full h-full object-cover"
          />

          {/* curved overlay */}
          <div
            className=" w-12 md:w-20
                       bg-[#FFF7F2]"
            style={{
              clipPath: "ellipse(100% 100% at 0% 50%)",
            }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PromoBanner;
