import type { INavbarItems } from "../interface";

export const navbarItems: INavbarItems[] = [
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
