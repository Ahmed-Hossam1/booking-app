import type { IActivity } from "../../interface";
import { FaStar, FaClock } from "react-icons/fa";
import Button from "../Ui/Button";
import HeartButton from "../Ui/HeartButton";
import { useNavigate } from "react-router-dom";

interface IProps {
    activity: IActivity;
}

const ActivityCard = ({ activity }: IProps) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col md:flex-row bg-white dark:bg-[#11121a] border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group">
            {/* Image Section */}
            <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0">
                <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                />
                <HeartButton
                    id={activity.id}
                    type="activity"
                    title={activity.title}
                    image={activity.image}
                    price={activity.price}
                    location={activity.category}
                    rating={activity.rating}
                    reviewCount={activity.reviewCount}
                    duration={activity.duration}
                    className="absolute top-3 right-3 z-10 shadow-sm"
                />
                {activity.isBestSeller && (
                    <span className="absolute top-3 left-3 bg-[#EB662B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Best Seller
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-5">
                {/* Category */}
                <span className="text-xs text-[#EB662B] font-medium uppercase tracking-wide mb-1">
                    {activity.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#05073C] dark:text-white mb-2 line-clamp-2 hover:text-[#EB662B] transition-colors cursor-pointer">
                    {activity.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {activity.description}
                </p>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={`w-3.5 h-3.5 ${i < Math.floor(activity.rating)
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm font-medium text-[#05073C] dark:text-gray-200">
                        {activity.rating}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({activity.reviewCount.toLocaleString()} reviews)
                    </span>
                </div>

                {/* Duration & Price Row */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-neutral-800">
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                        <FaClock className="w-4 h-4" />
                        <span>{activity.duration}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            {activity.originalPrice && (
                                <span className="text-sm text-gray-400 line-through mr-2">
                                    ${activity.originalPrice}
                                </span>
                            )}
                            <span className="text-lg font-bold text-[#05073C] dark:text-white">
                                From ${activity.price}
                            </span>
                        </div>
                        <Button
                            className="text-white text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                            onClick={() => {
                                navigate("/checkout", {
                                    state: {
                                        type: "activity",
                                        name: activity.title,
                                        image: activity.image,
                                        price: activity.price,
                                        priceLabel: "/ person",
                                        location: activity.category,
                                        duration: activity.duration,
                                    },
                                });
                            }}
                        >
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;
