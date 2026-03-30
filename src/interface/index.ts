export interface INavbarItems {
  name: string;
  link?: string;
  dropdown?: INavbarItems[];
}

export interface IHeroImages {
  src: string;
  alt: string;
}

export interface IWhyChooseUs {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface IDestinationCard {
  id: number;
  src: string;
  alt: string;
  title: string;
  tours: string | number;
}

type FooterLinks = {
  id: number;
  title: string;
  link: string;
};
export const IFooterLinks: Record<string, FooterLinks[]> = {
  Company: [
    { id: 1, title: "About", link: "/about" },
    { id: 2, title: "Contact us", link: "/contact" },
    { id: 3, title: "Privacy Policy", link: "/privacy" },
    { id: 4, title: "Terms & Conditions", link: "/terms" },
  ],

  Support: [
    { id: 1, title: "Help Center", link: "/help" },
  ],

  Mobile: [
    { id: 1, title: "Android App", link: "/" },
    { id: 2, title: "iOS App", link: "/" },
  ],
};

export interface IPayImages {
  id: number;
  src: string;
  alt: string;
}

export interface IActivity {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  duration: string;
  price: number;
  originalPrice?: number;
  isBestSeller?: boolean;
  category: string;
}

export interface IRoom {
  id: number;
  name: string;
  images: string[];
  type: string;
  beds: number;
  price: number;
  size: number;
  amenities: string[];
  status: "Available" | "Booked";
  hasBestValueBadge?: boolean;
}

export interface IHotel {
  id: number;
  name: string;
  city: string;
  country: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  description: string;
  Services: string[];
  reviewCount: number;
  rooms?: IRoom[];
}

export interface IBlogCard {
  id: number;
  src: string;
  alt: string;
  date: string;
  author: string;
  title: string;
  tag: string;
}

export interface ITransportation {
  id: number;
  type: "Bus" | "Van" | "Car";
  image: string;
  images: string[];
  price: number;
  seats: number;
  departureTime: string;
  rating: number;
  route: string;
  description: string;
  features: string[];
  company: string;
  duration: string;
}

export interface ITravelPackage {
  id: number;
  title: string;
  image: string;
  alt: string;
  tag: string;
  date: string;
  author: string;
  price: number;
  duration: string;
  activities: string[];
  highlights: string[];
}

export interface ITour {
  id: number;
  title: string;
  location: string;
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  duration: string;
  price: number;
  description: string;
  itinerary: string[];
}
