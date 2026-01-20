import type {
  IDestinationCard,
  IHeroImages,
  INavbarItems,
  IWhyChooseUs,
} from "../interface";

export const navbarItemsData: INavbarItems[] = [
  { name: "Activities", link: "/activities" },

  {
    name: "Destinations",
    dropdown: [
      { name: "Cities", link: "/cities" },
      { name: "Hotels", link: "/hotels" },
      { name: "Restaurants", link: "/restaurants" },
      { name: "Transportation", link: "/transportation" },
    ],
  },

  {
    name: "Support",
    link: "/support",
  },
  {
    name: "Login",
    link: "/login",
  },
  {
    name: "Signup",
    link: "/signup",
  },
];

export const heroSlidesData: IHeroImages[] = [
  {
    src: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
    alt: "Mountains",
  },
  {
    src: "https://imvoyager.com/wp-content/uploads/2017/08/voyager-blog-2.jpg",
    alt: "Beaches",
  },
  {
    src: "https://tse2.mm.bing.net/th/id/OIF.AUfK0s0DMyL93nXjooeVGQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Lakes",
  },
  {
    src: "https://www.wns.co.za/Portals/0/Images/HeaderBanner/desktop/1087/53/travel_HD.jpg",
    alt: "Caves",
  },
];

export const whyChooseData: IWhyChooseUs[] = [
  {
    src: "/images/WhyUs1.jpeg",
    alt: "WhyUs1",
    id: 1,
    title: "Ultimate flexibility",
    description:
      "You're in control, with free cancellation and payment options to satisfy any plan or budget.",
  },
  {
    id: 2,
    src: "/images/WhyUs2.jpeg",
    alt: "WhyUs2",
    title: "Memorable experiences",
    description:
      "Browse and book tours and activities so incredible, you'll want to tell your friends.",
  },
  {
    id: 3,
    src: "/images/WhyUs3.jpeg",
    alt: "WhyUs3",
    title: "Quality at our core",
    description:
      "High-quality standards. Millions of reviews. A tourz company.",
  },
  {
    id: 4,
    src: "/images/WhyUs4.jpeg",
    alt: "WhyUs4",
    title: "Award-winning support",
    description: "New price? New plan? No problem. We're here to help, 24/7.",
  },
];

export const trendingDestinationsData: IDestinationCard[] = [
  {
    src: "/images/TrendingDestination1.jpeg",
    alt: "TrendingDestination1",
    id: 1,
    title: "Paris",
    tours: 100,
  },
  {
    src: "/images/TrendingDestination1.jpeg",
    alt: "TrendingDestination1",
    id: 2,
    title: "Singapore",
    tours: 300,
  },
  {
    src: "/images/TrendingDestination1.jpeg",
    alt: "TrendingDestination1",
    id: 3,
    title: "Roma",
    tours: 400,
  },
  {
    src: "/images/TrendingDestination1.jpeg",
    alt: "TrendingDestination1",
    id: 4,
    title: "Bangkok",
    tours: 100,
  },
  {
    src: "/images/TrendingDestination1.jpeg",
    alt: "TrendingDestination1",
    id: 5,
    title: "Bali",
    tours: 600,
  },
  {
    src: "/images/TrendingDestination1.jpeg",
    alt: "TrendingDestination1",
    id: 6,
    title: "Phuket",
    tours: 200,
  },
  {
    src: "/images/TrendingDestination1.jpeg",
    alt: "TrendingDestination1",
    id: 7,
    title: "Tokyo",
    tours: 700,
  },
  {
    src: "/images/TrendingDestination1.jpeg",
    alt: "TrendingDestination1",
    id: 8,
    title: "Cappadocia",
    tours: 900,
  },
];
