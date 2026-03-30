import { Link } from "react-router-dom";
import { FaArrowLeft, FaCompass, FaSearch } from "react-icons/fa";
import Button from "../components/Ui/Button";

const quickLinks = [
  { label: "Browse Tours", to: "/tours" },
  { label: "Find a Hotel", to: "/hotels" },
  { label: "Travel Packages", to: "/packages" },
  { label: "Activities", to: "/activities" },
  { label: "Contact Us", to: "/contact" },
];

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05073C] via-[#0a0f4a] to-[#1a1060] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="relative mb-8">
          <p className="text-[180px] md:text-[220px] font-black text-white/5 leading-none select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-[#EB662B]/10 rounded-full flex items-center justify-center border border-[#EB662B]/20">
              <FaCompass className="text-5xl text-[#EB662B] animate-spin" style={{ animationDuration: "6s" }} />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Lost On Your Journey?
        </h1>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Search Bar */}
        <div className="flex items-center bg-white/10 border border-white/20 rounded-2xl overflow-hidden mb-10 max-w-md mx-auto backdrop-blur">
          <div className="flex items-center flex-1 px-5 gap-3">
            <FaSearch className="text-white/40 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for destinations, tours..."
              className="flex-1 py-4 text-sm text-white placeholder-white/40 bg-transparent focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const q = (e.target as HTMLInputElement).value;
                  if (q) window.location.href = `/search?q=${encodeURIComponent(q)}`;
                }
              }}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-5 py-2 bg-white/10 border border-white/20 text-white/80 rounded-full text-sm font-semibold hover:bg-white/20 hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="flex items-center gap-2 px-10 py-4 text-white font-bold rounded-xl">
              <FaArrowLeft /> Back to Home
            </Button>
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center px-10 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition text-sm"
          >
            Get Support
          </Link>
        </div>

        {/* Background decorations */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EB662B]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
