import { Link } from "react-router-dom";
import { travelPackagesData } from "../../data";
import Heading from "../Ui/Heading";
import TravelBlogCard from "../card/TravelBlogCard";
import SectionWrapper from "./SectionWrapper";
import { FaArrowRight } from "react-icons/fa6";

const TravelPackagesSection = () => {
    return (
        <SectionWrapper>
            <div className="flex items-center justify-between mb-6">
                <Heading title="Travel Packages Tours" />
                <Link
                    to="/packages"
                    className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                    See all
                    <FaArrowRight />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {travelPackagesData.slice(0, 3).map((pkg) => (
                    <TravelBlogCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TravelPackagesSection;

