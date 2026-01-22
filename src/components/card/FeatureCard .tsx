import type { IWhyChooseUs } from "../../interface";
import Image from "../Ui/Image";

const FeatureCard = ({ src, alt, title, description }: IWhyChooseUs) => {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:items-start sm:text-left">
      <Image
        src={src}
        alt={alt}
        width="w-14"
        className="mb-4 flex h-14 items-center justify-center rounded-full bg-orange-50"
      />

      <h3 className="mt-4 text-base sm:text-lg font-semibold text-[#05073C] capitalize">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500 leading-6 sm:leading-7 max-w-xs sm:max-w-none ">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
