import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../Ui/Button";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] md:rounded-2xl overflow-hidden">
      {/* Background */}
      <img
        src="/images/hero.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Arrows */}
      <Button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition">
        <FaArrowLeft />
      </Button>

      <Button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white  hover:bg-white/30 transition">
        <FaArrowRight />
      </Button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-semibold">
          Your world of joy
        </h1>

        <p className="text-white/85 mt-3 max-w-xl text-sm md:text-base">
          From local escapes to far-flung adventures, discover journeys made for
          you
        </p>

        {/* Minimal Strip */}
        <div className="mt-10 flex items-center gap-4 bg-white/95 backdrop-blur px-6 py-3 rounded-full shadow-md">
          <span className="text-xs font-medium text-gray-500">
            ✦ Explore smarter
          </span>

          <span className="hidden sm:block h-4 w-px bg-gray-300" />

          <span className="text-sm text-gray-700">
            Discover destinations, activities & experiences
          </span>

          <Button className="ml-2  text-sm font-medium px-4 py-2 rounded-full">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
