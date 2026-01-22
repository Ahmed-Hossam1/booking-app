// interface PromoBannerProps {
//   title: string;
//   highlight?: string;
//   subtitle?: string;
//   ctaText: string;
//   onCtaClick?: () => void;
//   image: string;
// }

import Button from "../Ui/Button";
import Image from "../Ui/Image";
import SectionWrapper from "./SectionWrapper";

const PromoBanner = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left content */}
        <div className="relative z-10 px-6 py-12 md:px-12 lg:py-16">
          <h2 className="capitalize text-3xl md:text-4xl font-bold text-[#05073C] leading-snug">
            Grab up to <span className="text-[#EB662B]"> 35% off</span> on your
            favorite Destination
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-md">
            Limited time offer, don't miss the opportunity
          </p>

          <Button className=" transition text-white px-11 py-4 mt-7 rounded-xl">
            Book Now
          </Button>
        </div>

        {/* Right image */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image src="/images/Promo.jpeg" alt="" className=" h-full " />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PromoBanner;
