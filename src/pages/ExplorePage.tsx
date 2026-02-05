import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import ActivityCard from "../components/card/ActivityCard";
import FilterSidebar from "../components/sections/FilterSidebar";
import Pagination from "../components/Ui/Pagination";
import { activitiesData } from "../data/activitiesData";

const ITEMS_PER_PAGE = 10;

const ExplorePage = () => {
    const { destination = "egypt" } = useParams();
    const destinationName =
        destination.charAt(0).toUpperCase() + destination.slice(1);

    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState("all");
    const [onlyBestSeller, setOnlyBestSeller] = useState(false);
    const [sortBy, setSortBy] = useState("recommended");

    /* ================= FILTER ================= */
    // Map category id to actual category name
    const categoryMap: Record<string, string> = {
        all: "all",
        outdoor: "Outdoor Activities",
        boat: "Boat Tours",
        water: "Water Activities",
        cultural: "Cultural Tours",
    };

    let filteredActivities = [...activitiesData];

    if (category !== "all") {
        const categoryName = categoryMap[category];
        filteredActivities = filteredActivities.filter(
            (a) => a.category === categoryName
        );
    }

    if (onlyBestSeller) {
        filteredActivities = filteredActivities.filter(
            (a) => a.isBestSeller
        );
    }

    /* ================= SORT ================= */
    if (sortBy === "price-low") {
        filteredActivities.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
        filteredActivities.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
        filteredActivities.sort((a, b) => b.rating - a.rating);
    }

    /* ================= PAGINATION ================= */
    const totalPages = Math.ceil(
        filteredActivities.length / ITEMS_PER_PAGE
    );

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedActivities = filteredActivities.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    return (
        <div className="min-h-screen bg-gray-50 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <Link to="/" className="hover:text-[#EB662B]">
                        Home
                    </Link>
                    <FaChevronRight className="w-3 h-3" />
                    <span className="text-[#05073C] font-medium">
                        {destinationName}
                    </span>
                </nav>

                {/* Header + Sort */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#05073C]">
                        Explore all things to do in {destinationName}
                    </h1>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-[#05073C] focus:ring-2 focus:ring-[#EB662B]"
                        >
                            <option value="recommended">Recommended</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <FilterSidebar
                        selectedCategory={category}
                        onCategoryChange={(cat) => {
                            setCategory(cat);
                            setCurrentPage(1);
                        }}
                        onBestSellerChange={(value) => {
                            setOnlyBestSeller(value);
                            setCurrentPage(1);
                        }}
                    />

                    {/* Activities */}
                    <div className="flex-grow">
                        <p className="text-sm text-gray-500 mb-4">
                            Showing {paginatedActivities.length} of{" "}
                            {filteredActivities.length} activities
                        </p>

                        <div className="space-y-4">
                            {paginatedActivities.map((activity) => (
                                <ActivityCard
                                    key={activity.id}
                                    activity={activity}
                                />
                            ))}
                        </div>

                        {paginatedActivities.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">
                                    No activities found
                                </p>
                            </div>
                        )}

                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;
