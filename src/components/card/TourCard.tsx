import Image from "../Ui/Image";

const TourCard = () => {
  return (
    <div className=" bg-white border border-[#E7E6E6] rounded-xl overflow-hidden hover:shadow-lg transition">
      <div className="relative p-2 rounded-xl">
        <Image
          src={"/images/PopularTours1.jpeg"}
          alt={"PopularTours1"}
          className="rounded-xl"
        />

        {/* Floating white circle */}
        <span className="absolute bottom-0 right-4 translate-y-1/2 w-9 h-9 bg-white rounded-4xl" />
      </div>

      {/* Content */}
      <div className="px-5 pt-6 pb-4">

        {/* Location */}
        <p className="text-xs capitalize text-[#717171] mb-2">paris, france</p>

        {/* Title */}
        <h3 className="text-[15px] leading-6 font-medium text-[#05073C] line-clamp-2">
          Centipede Tour - Guided Arizona Desert Tour by ATV
        </h3>

        {/* Rating */}
        <div className="mt-2 text-xs text-[#05073C]">4.8 (243)</div>

        <div className="border-t border-[#E7E6E6] mt-4 pt-3 flex items-center justify-between text-sm text-[#05073C]">
          <span>4 days</span>
          <span className="font-medium">From $120</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
