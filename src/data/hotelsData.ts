import type { IHotel } from "../interface";

export const hotelsData: IHotel[] = [
  {
    id: 1,
    name: "Luxury Nile View",
    city: "Cairo",
    country: "Egypt",
    price: 250,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
    ],
    description:
      "Situated on the banks of the Nile, Luxury Nile View offers a blend of timeless elegance and modern comfort. Each room features floor-to-ceiling windows showcasing panoramic river views. The hotel boasts a rooftop infinity pool, a world-class spa, and three on-site restaurants serving Egyptian and international cuisine. Guests can enjoy guided tours to nearby historical sites or simply relax in the lush garden courtyards.",
    Services: [
      "2 bedrooms",
      "1 living room",
      "1 bathroom",
      "Free WiFi",
      "Swimming Pool",
      "Room Service",
      "Air Conditioning",
      "Mini Bar",
    ],
    reviewCount: 324,
  },
  {
    id: 2,
    name: "Red Sea Resort",
    city: "Hurghada",
    country: "Egypt",
    price: 180,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
    ],
    description:
      "Red Sea Resort is a beachfront paradise offering crystal-clear waters, vibrant coral reefs, and golden sandy beaches. The resort features spacious suites with private balconies overlooking the sea. Enjoy snorkeling, diving excursions, and water sports right at your doorstep. The all-inclusive dining options range from traditional Egyptian feasts to fresh seafood grills by the shore.",
    Services: [
      "1 bedroom",
      "1 living room",
      "2 bathrooms",
      "Beachfront",
      "Free WiFi",
      "Fitness Center",
      "Spa",
      "Restaurant",
    ],
    reviewCount: 512,
  },
  {
    id: 3,
    name: "Pyramids Palace",
    city: "Cairo",
    country: "Egypt",
    price: 300,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
    ],
    description:
      "Wake up to breathtaking views of the Great Pyramids of Giza at Pyramids Palace. This five-star luxury hotel combines ancient Egyptian grandeur with contemporary sophistication. The hotel features an award-winning restaurant, a serene spa inspired by pharaonic rituals, and an outdoor terrace where guests can dine under the stars with the pyramids as their backdrop.",
    Services: [
      "3 bedrooms",
      "2 living rooms",
      "2 bathrooms",
      "Pyramid View",
      "Free WiFi",
      "Butler Service",
      "Rooftop Bar",
      "Concierge",
    ],
    reviewCount: 876,
  },
  {
    id: 4,
    name: "Golden Sands",
    city: "Sharm El Sheikh",
    country: "Egypt",
    price: 220,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
    ],
    description:
      "Golden Sands is nestled along the pristine shores of Sharm El Sheikh, offering an idyllic escape for families and couples alike. The resort features multiple swimming pools, a private sandy beach, and a vibrant nightlife scene. Explore the nearby Ras Mohammed National Park for world-class diving, or unwind with a sunset yoga session on the beach.",
    Services: [
      "1 bedroom",
      "1 living room",
      "1 bathroom",
      "Private Beach",
      "Free WiFi",
      "Kids Club",
      "Water Sports",
      "Parking",
    ],
    reviewCount: 643,
  },
  {
    id: 5,
    name: "Alexandria Royal",
    city: "Alexandria",
    country: "Egypt",
    price: 150,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    ],
    description:
      "Experience the charm of the Mediterranean at Alexandria Royal. Located along the iconic Corniche, this boutique hotel offers elegant rooms with sea views, a rooftop restaurant serving fresh seafood, and easy access to the Bibliotheca Alexandrina. The hotel's classic architecture and warm hospitality make it the perfect base for exploring Alexandria's rich cultural heritage.",
    Services: [
      "1 bedroom",
      "1 bathroom",
      "Sea View",
      "Free WiFi",
      "Restaurant",
      "Laundry",
      "Airport Shuttle",
      "Library",
    ],
    reviewCount: 198,
  },
  {
    id: 6,
    name: "Desert Oasis",
    city: "Luxor",
    country: "Egypt",
    price: 190,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    ],
    description:
      "Desert Oasis is a tranquil retreat set against the dramatic backdrop of Luxor's ancient temples. The hotel features beautifully appointed rooms with traditional Nubian décor, a garden courtyard with a shimmering pool, and an open-air restaurant overlooking the Valley of the Kings. Guests can enjoy hot-air balloon rides at dawn, felucca sailing on the Nile, and guided temple tours.",
    Services: [
      "2 bedrooms",
      "1 living room",
      "1 bathroom",
      "Garden View",
      "Free WiFi",
      "Pool",
      "Guided Tours",
      "Breakfast Included",
    ],
    reviewCount: 421,
  },
];

export const cities1 = [
  "New York",
  "Cairo",
  "Alexandria",
  "London",
  "Tokyo",
  "Dubai",
];

export const cities2 = [
  "Paris",
  "Riyadh",
  "Casablanca",
  "Berlin",
  "Istanbul",
  "Toronto",
];
