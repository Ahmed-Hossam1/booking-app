import Bullets from "../Ui/Bullets";
import Heading from "../Ui/Heading";
import Image from "../Ui/Image";
import SectionWrapper from "./SectionWrapper";

const CustomerReviewSection = () => {
  return (
    <SectionWrapper className="relative py-24 overflow-hidden bg-white">
      {/* Image */}
      <Image
        src={"images/CustomerReviews.png"}
        alt="customerReviews"
        className="absolute h-full top-0 left-0 "
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <Heading title="Customer Reviews" />

        {/* Main avatar */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <span className="absolute -top-1 -left-1 w-6 h-6 bg-[#EB662B] text-white rounded-full flex items-center justify-center text-lg">
            “
          </span>
          <Image
            src="/images/customerAvatar.png"
            alt="user"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Review */}
        <p className="text-[#EB662B] font-medium mb-4">Excellent Service!</p>

        <p className="text-base leading-relaxed text-body mb-6">
          I had an amazing experience with this company. The service was
          top-notch, and the staff was incredibly friendly. I highly recommend
          them!
        </p>

        {/* Author */}
        <div className="mb-6">
          <p className="font-medium text-heading">John Smith</p>
          <p className="text-sm text-gray-500">Traveler</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2">
          <Bullets />
          <Bullets />
          <Bullets />
          <Bullets />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CustomerReviewSection;
