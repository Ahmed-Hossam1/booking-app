import type { ITransportation } from "../interface";

export const transportationData: ITransportation[] = [
  // --- Bus Options ---
  {
    id: 1,
    type: "Bus",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800",
    ],
    price: 25,
    seats: 45,
    departureTime: "06:00 AM",
    rating: 4.3,
    route: "Cairo → Hurghada",
    company: "Go Bus",
    duration: "5h 30m",
    description:
      "Travel comfortably from Cairo to Hurghada aboard our modern air-conditioned bus. Enjoy spacious reclining seats, onboard Wi-Fi, and a smooth highway ride with a short rest stop along the way.",
    features: [
      "Air Conditioning",
      "Free Wi-Fi",
      "Reclining Seats",
      "USB Charging",
      "Luggage Storage",
      "Rest Stop Included",
    ],
  },
  {
    id: 2,
    type: "Bus",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800",
    ],
    price: 30,
    seats: 50,
    departureTime: "08:30 AM",
    rating: 4.5,
    route: "Cairo → Alexandria",
    company: "Super Jet",
    duration: "2h 45m",
    description:
      "A premium bus service connecting Cairo to Alexandria. Enjoy a quick and comfortable ride with extra legroom, entertainment screens, and complimentary snacks.",
    features: [
      "Air Conditioning",
      "Entertainment Screen",
      "Extra Legroom",
      "Complimentary Snacks",
      "USB Charging",
      "Luggage Storage",
    ],
  },
  {
    id: 3,
    type: "Bus",
    image:
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
    ],
    price: 40,
    seats: 40,
    departureTime: "10:00 AM",
    rating: 4.7,
    route: "Cairo → Luxor",
    company: "Upper Egypt Bus",
    duration: "9h 00m",
    description:
      "Travel from Cairo to the historic city of Luxor. This long-distance bus features comfortable seats, meal service, and multiple rest stops for a pleasant journey through the Nile Valley.",
    features: [
      "Air Conditioning",
      "Meal Service",
      "Reclining Seats",
      "Blanket & Pillow",
      "Multiple Rest Stops",
      "Luggage Storage",
    ],
  },

  // --- Van Options ---
  {
    id: 4,
    type: "Van",
    image:
      "https://images.unsplash.com/photo-1609520778163-a16fb3862581?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1609520778163-a16fb3862581?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&q=80&w=800",
    ],
    price: 55,
    seats: 12,
    departureTime: "07:00 AM",
    rating: 4.6,
    route: "Cairo → Sharm El Sheikh",
    company: "East Delta Travel",
    duration: "6h 00m",
    description:
      "A comfortable private van service from Cairo to Sharm El Sheikh. Ideal for small groups wanting a direct, hassle-free trip to the Red Sea coast with scenic desert views.",
    features: [
      "Air Conditioning",
      "Direct Route",
      "Comfortable Seats",
      "Water Provided",
      "Luggage Space",
      "Professional Driver",
    ],
  },
  {
    id: 5,
    type: "Van",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1609520778163-a16fb3862581?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&q=80&w=800",
    ],
    price: 45,
    seats: 14,
    departureTime: "09:00 AM",
    rating: 4.4,
    route: "Alexandria → Cairo",
    company: "West Delta Co.",
    duration: "3h 00m",
    description:
      "Quick and affordable van transfer from Alexandria back to Cairo. Spacious seating, air conditioning, and a smooth highway ride make this a stress-free commute.",
    features: [
      "Air Conditioning",
      "Highway Route",
      "Spacious Interior",
      "USB Charging",
      "Luggage Space",
      "Experienced Driver",
    ],
  },
  {
    id: 6,
    type: "Van",
    image:
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1609520778163-a16fb3862581?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800",
    ],
    price: 60,
    seats: 10,
    departureTime: "11:30 AM",
    rating: 4.8,
    route: "Hurghada → Luxor",
    company: "Nile Valley Transport",
    duration: "4h 00m",
    description:
      "A scenic van ride from the Red Sea coast to the ancient temples of Luxor. Small group size ensures personal comfort and the chance to enjoy the beautiful desert landscape.",
    features: [
      "Air Conditioning",
      "Scenic Route",
      "Small Group",
      "Water Provided",
      "Photo Stops",
      "Professional Driver",
    ],
  },

  // --- Car Options ---
  {
    id: 7,
    type: "Car",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0637?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0637?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800",
    ],
    price: 90,
    seats: 4,
    departureTime: "Anytime",
    rating: 4.9,
    route: "Cairo → Any Destination",
    company: "Careem",
    duration: "Flexible",
    description:
      "Book a private car from Cairo to any destination of your choice. Enjoy full flexibility with departure time, a professional driver, and a clean, modern sedan for a premium travel experience.",
    features: [
      "Private Vehicle",
      "Flexible Schedule",
      "Professional Driver",
      "Air Conditioning",
      "Free Wi-Fi",
      "Water & Tissues",
    ],
  },
  {
    id: 8,
    type: "Car",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0637?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800",
    ],
    price: 75,
    seats: 4,
    departureTime: "Anytime",
    rating: 4.7,
    route: "Alexandria → Any Destination",
    company: "Uber",
    duration: "Flexible",
    description:
      "A reliable private car service from Alexandria. Whether you're heading to the airport or another city, enjoy a comfortable ride with real-time tracking and cashless payment.",
    features: [
      "Private Vehicle",
      "Real-Time Tracking",
      "Cashless Payment",
      "Air Conditioning",
      "Professional Driver",
      "24/7 Support",
    ],
  },
  {
    id: 9,
    type: "Car",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0637?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
    ],
    price: 110,
    seats: 6,
    departureTime: "Anytime",
    rating: 5.0,
    route: "Luxor → Any Destination",
    company: "Luxury Rides Egypt",
    duration: "Flexible",
    description:
      "Premium SUV service from Luxor with seating for up to 6 passengers. Perfect for families or groups looking for a spacious, luxurious ride with top-tier service.",
    features: [
      "Premium SUV",
      "6-Passenger Capacity",
      "Luxury Interior",
      "Air Conditioning",
      "Free Wi-Fi",
      "Complimentary Refreshments",
    ],
  },
];
