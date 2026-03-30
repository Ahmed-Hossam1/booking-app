import { FaGlobe, FaHandshake, FaLeaf, FaShieldAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Ui/Button";
import SectionWrapper from "../components/sections/SectionWrapper";

const stats = [
  { value: "10M+", label: "Happy Travelers" },
  { value: "190+", label: "Countries Covered" },
  { value: "50K+", label: "Tours & Activities" },
  { value: "4.9★", label: "Average Rating" },
];

const values = [
  {
    icon: <FaGlobe className="text-2xl" />,
    title: "Global Reach",
    description:
      "We connect travelers to unforgettable experiences in every corner of the world, from hidden gems to iconic landmarks.",
  },
  {
    icon: <FaShieldAlt className="text-2xl" />,
    title: "Trust & Safety",
    description:
      "Every listing is verified and reviewed. Your safety and peace of mind are always our top priority.",
  },
  {
    icon: <FaHandshake className="text-2xl" />,
    title: "Local Partnerships",
    description:
      "We work directly with local guides and operators to ensure authentic, community-driven travel experiences.",
  },
  {
    icon: <FaLeaf className="text-2xl" />,
    title: "Sustainable Travel",
    description:
      "We champion eco-conscious tourism and work to minimize travel's environmental impact one trip at a time.",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    quote: "Travel is the only thing you buy that makes you richer.",
  },
  {
    name: "James Okafor",
    role: "Head of Partnerships",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    quote: "Every destination has a story waiting to be discovered.",
  },
  {
    name: "Aiko Tanaka",
    role: "Lead Experience Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    quote: "Great travel is about people, not just places.",
  },
  {
    name: "Carlos Rivera",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    quote: "Technology should make adventures easier, not less adventurous.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1920"
            alt="About Viatours"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05073C]/70 via-[#05073C]/50 to-[#05073C]/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block bg-[#EB662B]/20 text-[#EB662B] border border-[#EB662B]/30 px-4 py-1 rounded-full text-sm font-semibold tracking-widest uppercase mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            We Live to Help You{" "}
            <span className="text-[#EB662B]">Explore the World</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Founded by passionate travelers, Viatours has been connecting curious
            minds to extraordinary destinations since 2015.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white relative z-20 -mt-12 mx-auto max-w-5xl rounded-2xl shadow-2xl px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 border border-gray-100">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl font-black text-[#05073C]">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <SectionWrapper className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#EB662B] font-bold tracking-widest uppercase text-sm">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#05073C] mt-4 mb-6 leading-tight">
              Making World-Class Travel Accessible to Everyone
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe that transformative travel shouldn't be exclusive. Our platform makes it
              easy to discover, plan, and book extraordinary experiences — whether it's a hot air
              balloon at sunrise over Cappadocia or a street food tour through Tokyo's alleyways.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From solo backpackers to luxury family holidays, we've built Viatours to serve every
              kind of traveler with the same commitment to quality, transparency, and authentic
              local connections.
            </p>
            <Link to="/explore/world">
              <Button className="px-8 py-3 text-white rounded-xl font-bold">
                Explore Destinations
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&fit=crop"
              alt="Travel"
              className="rounded-2xl h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=400&fit=crop"
              alt="Adventure"
              className="rounded-2xl h-64 w-full object-cover mt-8"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#EB662B] font-bold tracking-widest uppercase text-sm">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#05073C] mt-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-[#EB662B]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#EB662B]/10 rounded-2xl flex items-center justify-center text-[#EB662B] mb-5 group-hover:bg-[#EB662B] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-[#05073C] mb-3">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#EB662B] font-bold tracking-widest uppercase text-sm">
              The People Behind Viatours
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#05073C] mt-4">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#05073C]">{member.name}</h3>
                  <p className="text-sm text-[#EB662B] font-semibold mb-3">{member.role}</p>
                  <p className="text-xs text-gray-500 italic">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Awards / Trust section */}
      <SectionWrapper className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-2xl" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-bold text-[#05073C] mb-4">
            Rated #1 Travel Booking Platform in 2025
          </p>
          <p className="text-gray-500 mb-8">
            As recognized by Travel Weekly, Forbes, and 10 million happy customers worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="px-8 py-3 text-white rounded-xl font-bold">
                Get in Touch
              </Button>
            </Link>
            <Link to="/hotels">
              <Button
                backgroundColor="transparent"
                className="px-8 py-3 rounded-xl font-bold border border-[#05073C] text-[#05073C] hover:bg-gray-50"
              >
                Browse Experiences
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper className="py-12 px-4">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-[#05073C] p-10 md:p-16 text-center">
          <div className="relative z-10">
            <span className="text-[#EB662B] font-bold tracking-widest uppercase text-sm">
              Join Our Community
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold mt-4 mb-6">
              Start Your Next Adventure Today
            </h2>
            <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto">
              Join over 10 million travelers who trust Viatours for extraordinary experiences.
            </p>
            <Link to="/sign-up">
              <Button className="px-12 py-4 text-white font-bold rounded-xl text-lg">
                Create Free Account
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EB662B]/10 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#EB662B]/5 blur-3xl rounded-full -ml-20" />
        </div>
      </SectionWrapper>

      {/* Breadcrumb / Nav */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-[#EB662B] hover:underline font-medium">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">About Us</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
