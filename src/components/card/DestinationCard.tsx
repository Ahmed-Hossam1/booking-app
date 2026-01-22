import type { IDestinationCard } from "../../interface";
import Image from "../Ui/Image";

const DestinationCard = ({ src, alt, title, tours }: IDestinationCard) => {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <Image
        src={src}
        alt={alt}
        width="w-20"
        className="h-20 sm:w-24 sm:h-24 rounded-full object-cover"
      />
      <h4 className="mt-1 text-sm sm:text-base font-medium text-[#05073C]">{title}</h4>
      <p className="text-xs text-gray-500">{tours}+ Tours</p>
    </div>
  );
};

export default DestinationCard;
