import type { IActivity } from "../interface";

export const activitiesData: IActivity[] = [
    {
        id: 1,
        title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch",
        description:
            "Explore the stunning Phi Phi Islands on this full-day adventure. Visit Maya Bay, swim in crystal-clear waters, and enjoy snorkeling at pristine spots.",
        image:
            "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&h=300&fit=crop",
        rating: 4.8,
        reviewCount: 2847,
        duration: "Full day",
        price: 89,
        originalPrice: 120,
        isBestSeller: true,
        category: "Boat Tours",
    },
    {
        id: 2,
        title: "James Bond Island & Phang Nga Bay Tour by Longtail Boat",
        description:
            "Discover the famous James Bond Island and explore the stunning limestone karsts of Phang Nga Bay on a traditional longtail boat.",
        image:
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop",
        rating: 4.7,
        reviewCount: 1923,
        duration: "8 hours",
        price: 75,
        isBestSeller: true,
        category: "Boat Tours",
    },
    {
        id: 3,
        title: "Big Buddha & Phuket City Tour with Temple Visits",
        description:
            "Visit Phuket's iconic Big Buddha statue and explore the historic Old Town. Includes visits to Wat Chalong and other cultural landmarks.",
        image:
            "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400&h=300&fit=crop",
        rating: 4.6,
        reviewCount: 856,
        duration: "5 hours",
        price: 45,
        category: "Cultural Tours",
    },
    {
        id: 4,
        title: "Elephant Sanctuary & Waterfall Hiking Experience",
        description:
            "Spend a memorable day at an ethical elephant sanctuary. Feed, bathe, and interact with rescued elephants, then hike to a beautiful waterfall.",
        image:
            "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=300&fit=crop",
        rating: 4.9,
        reviewCount: 1456,
        duration: "6 hours",
        price: 95,
        originalPrice: 110,
        isBestSeller: true,
        category: "Outdoor Activities",
    },
    {
        id: 5,
        title: "Phuket Scuba Diving for Beginners - 2 Dives",
        description:
            "Experience the underwater world with this beginner-friendly scuba diving trip. Includes all equipment, instruction, and two guided dives.",
        image:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
        rating: 4.8,
        reviewCount: 723,
        duration: "Full day",
        price: 120,
        category: "Water Activities",
    },
    {
        id: 6,
        title: "Sunset Dinner Cruise with Live Music",
        description:
            "Sail into the sunset on a luxury catamaran. Enjoy a gourmet dinner, cocktails, and live music while watching the sun set over the Andaman Sea.",
        image:
            "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=400&h=300&fit=crop",
        rating: 4.7,
        reviewCount: 1102,
        duration: "4 hours",
        price: 85,
        category: "Boat Tours",
    },
    {
        id: 7,
        title: "ATV Adventure Through Jungle & Mountains",
        description:
            "Rev up for an exciting ATV adventure through Phuket's jungle trails and mountain paths. Perfect for thrill-seekers of all experience levels.",
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        rating: 4.5,
        reviewCount: 634,
        duration: "3 hours",
        price: 65,
        category: "Outdoor Activities",
    },
    {
        id: 8,
        title: "Thai Cooking Class with Market Tour",
        description:
            "Learn to cook authentic Thai dishes in this hands-on cooking class. Includes a visit to a local market to select fresh ingredients.",
        image:
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop",
        rating: 4.9,
        reviewCount: 987,
        duration: "4 hours",
        price: 55,
        isBestSeller: true,
        category: "Cultural Tours",
    },
    {
        id: 9,
        title: "Kayaking in Phang Nga Bay Sea Caves",
        description:
            "Paddle through hidden sea caves and mangrove forests in Phang Nga Bay. Discover secret lagoons and stunning limestone formations.",
        image:
            "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?w=400&h=300&fit=crop",
        rating: 4.6,
        reviewCount: 512,
        duration: "5 hours",
        price: 70,
        category: "Water Activities",
    },
    {
        id: 10,
        title: "Similan Islands Snorkeling Day Trip",
        description:
            "Journey to the world-famous Similan Islands for incredible snorkeling. Crystal-clear waters and vibrant coral reefs await.",
        image:
            "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=400&h=300&fit=crop",
        rating: 4.8,
        reviewCount: 1834,
        duration: "Full day",
        price: 135,
        originalPrice: 160,
        isBestSeller: true,
        category: "Boat Tours",
    },
    {
        id: 11,
        title: "Zipline Adventure in Phuket Rainforest",
        description:
            "Soar through the treetops on an exciting zipline adventure. Includes multiple platforms and stunning views of the rainforest canopy.",
        image:
            "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=400&h=300&fit=crop",
        rating: 4.7,
        reviewCount: 892,
        duration: "3 hours",
        price: 80,
        category: "Outdoor Activities",
    },
    {
        id: 12,
        title: "Traditional Thai Massage & Spa Experience",
        description:
            "Relax and rejuvenate with a traditional Thai massage and spa treatment. Includes aromatherapy, herbal compress, and refreshments.",
        image:
            "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=300&fit=crop",
        rating: 4.8,
        reviewCount: 1567,
        duration: "2 hours",
        price: 50,
        category: "Cultural Tours",
    },
];

export const activityCategories = [
    { id: "all", name: "All Activities", count: 12 },
    { id: "outdoor", name: "Outdoor Activities", count: 3 },
    { id: "boat", name: "Boat Tours", count: 4 },
    { id: "water", name: "Water Activities", count: 2 },
    { id: "cultural", name: "Cultural Tours", count: 3 },
];

export const filterOptions = {
    topPicks: [
        { id: "free-cancellation", label: "Free Cancellation" },
        { id: "best-seller", label: "Best Seller" },
    ],
    sortBy: [
        { id: "recommended", label: "Recommended" },
        { id: "price-low", label: "Price: Low to High" },
        { id: "price-high", label: "Price: High to Low" },
        { id: "rating", label: "Highest Rated" },
    ],
};
