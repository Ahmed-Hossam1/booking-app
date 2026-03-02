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
};
export const IFooterLinks: Record<string, FooterLinks[]> = {
  Company: [
    {
      id: 1,
      title: "About",
    },
    {
      id: 2,
      title: "Tourz Reviews ",
    },
    {
      id: 3,
      title: "Contact us ",
    },
    {
      id: 4,
      title: "Travel Guides ",
    },
    {
      id: 5,
      title: "Data Policy ",
    },
    {
      id: 6,
      title: "Cookie Policy ",
    },
    {
      id: 7,
      title: "Legal ",
    },
    {
      id: 8,
      title: "Sitemap ",
    },
  ],

  Support: [
    {
      id: 1,
      title: "Get in Touch ",
    },
    {
      id: 2,
      title: "Help center ",
    },
    {
      id: 3,
      title: "Live chat ",
    },
    {
      id: 4,
      title: "How it works ",
    },
  ],

  Mobile: [
    {
      id: 1,
      title: "Android App",
    },
    {
      id: 2,
      title: "iOS App",
    },
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
