import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../Ui/Button";
import { useEffect, useState } from "react";
import { heroSlidesData } from "../../data";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const NextImage = () => {
    if (currentIndex === heroSlidesData.length - 1) return setCurrentIndex(0);
    setCurrentIndex((prev) => prev + 1);
  };

  const PrevImage = () => {
    if (currentIndex === 0) return setCurrentIndex(heroSlidesData.length - 1);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (!heroSlidesData.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroSlidesData.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = heroSlidesData.map((image, index) => (
    <div key={index} className="w-full h-full shrink-0">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
    </div>
  ));

  return (
    <section className="relative w-full h-[80vh] md:rounded-2xl overflow-hidden">
      {/* Slider wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-5" />

      {/* Arrows */}
      <Button
        onClick={PrevImage}
        className=" absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/25 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 active:scale-95 transition"
      >
        <FaArrowLeft className="text-sm sm:text-base" />
      </Button>

      <Button
        onClick={NextImage}
        className=" absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/25 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 active:scale-95 transition"
      >
        <FaArrowRight className="text-sm sm:text-base" />
      </Button>

      {/* Content */}
      <div className=" relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        {/* Title */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Your world of joy
        </h1>

        {/* Description */}
        <p className=" text-white/85 mt-3 sm:mt-4 max-w-md sm:max-w-xl text-sm sm:text-base leading-relaxed">
          From local escapes to far-flung adventures, discover journeys made for
          you
        </p>

        {/* CTA Strip */}
        <div className=" mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/95 backdrop-blur px-4 sm:px-6 py-3 rounded-2xl sm:rounded-full shadow-md w-full max-w-md sm:max-w-fit">
          <span className="text-xs font-medium text-gray-500">
            ✦ Explore smarter
          </span>

          <span className="hidden sm:block h-4 w-px bg-gray-300" />

          <span className="text-sm text-gray-700 text-center sm:text-left">
            Discover destinations, activities & experiences
          </span>

          <Button className=" sm:ml-2 text-sm font-medium px-4 py-2 rounded-full w-full sm:w-auto ">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
