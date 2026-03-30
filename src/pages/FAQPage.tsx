import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import SectionWrapper from "../components/sections/SectionWrapper";
import Button from "../components/Ui/Button";

const faqs = [
  {
    category: "Booking",
    items: [
      {
        q: "How do I make a booking?",
        a: "Simply browse our tours, hotels, or packages, select your preferred option, choose your dates and number of guests, and proceed to checkout. You'll receive a confirmation email once your booking is confirmed.",
      },
      {
        q: "Can I modify my booking after confirming?",
        a: "Yes! Most bookings can be modified up to 24–48 hours before your scheduled experience. Log in to your account, go to 'My Bookings', and click 'Modify' on the relevant booking.",
      },
      {
        q: "What forms of payment do you accept?",
        a: "We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay. All payments are processed securely with 256-bit SSL encryption.",
      },
    ],
  },
  {
    category: "Cancellation & Refunds",
    items: [
      {
        q: "What is your cancellation policy?",
        a: "Most experiences offer free cancellation up to 24 hours before the start time. Some specialty tours (e.g., hot air balloon flights) have a 48-hour policy. The exact policy is always shown on the booking page.",
      },
      {
        q: "How long does a refund take?",
        a: "Refunds are processed within 5–7 business days. Depending on your bank, it may take an additional 2–3 days to appear in your account.",
      },
      {
        q: "What if the operator cancels my tour?",
        a: "If an operator cancels due to unforeseen circumstances (e.g., bad weather), you'll receive a full refund or be offered a free rebooking — whichever you prefer.",
      },
    ],
  },
  {
    category: "Account",
    items: [
      {
        q: "How do I create an account?",
        a: "Click 'Sign Up' in the navigation bar and fill in your details. You can also sign up instantly using your Google or Facebook account.",
      },
      {
        q: "I forgot my password. What should I do?",
        a: "Visit the Login page and click 'Forgot Password'. Enter your registered email address and we'll send you a link to reset it within a few minutes.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes. Go to Profile → Security → Delete Account. Please note this is permanent and cannot be undone. All your booking history and personal data will be removed.",
      },
    ],
  },
  {
    category: "Safety & Support",
    items: [
      {
        q: "Are the tour operators vetted?",
        a: "Absolutely. Every operator on Viatours goes through a rigorous vetting process including license verification, insurance checks, and ongoing review monitoring.",
      },
      {
        q: "What should I do in an emergency during a tour?",
        a: "Contact our 24/7 support team immediately at +1 (555) 123-4567 or hi@viatours.com. Our emergency response team is always on standby.",
      },
      {
        q: "Is my personal data safe?",
        a: "Yes. We follow GDPR and CCPA guidelines. Your data is never sold to third parties. Read our full Privacy Policy for details.",
      },
    ],
  },
];

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const categories = ["All", ...faqs.map((f) => f.category)];

  const filtered = faqs
    .filter((group) => activeCategory === "All" || group.category === activeCategory)
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          searchQuery === "" ||
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
            alt="Help Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#05073C]/70" />
        </div>
        <div className="relative z-10 px-4 w-full max-w-2xl mx-auto">
          <span className="inline-block bg-[#EB662B]/20 text-[#EB662B] border border-[#EB662B]/30 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How Can We Help?
          </h1>
          <div className="flex items-center bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center flex-1 px-5 gap-3">
              <FaSearch className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-10">
            <Link to="/" className="text-[#EB662B] hover:underline font-medium">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Help Center</span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#EB662B] text-white shadow-lg"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#EB662B] hover:text-[#EB662B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQs */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-bold text-xl">No results found.</p>
              <p className="text-sm text-gray-400 mt-2">Try a different search term.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {filtered.map((group) => (
                <div key={group.category}>
                  <h2 className="text-xl font-extrabold text-[#05073C] mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#EB662B] rounded-full inline-block" />
                    {group.category}
                  </h2>
                  <div className="space-y-3">
                    {group.items.map((item, idx) => {
                      const key = `${group.category}-${idx}`;
                      const isOpen = openItems[key];
                      return (
                        <div
                          key={key}
                          className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                            isOpen ? "border-[#EB662B]/30 shadow-md" : "border-gray-100 shadow-sm"
                          }`}
                        >
                          <button
                            onClick={() => toggle(key)}
                            className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                          >
                            <span className={`font-semibold text-sm pr-4 ${isOpen ? "text-[#EB662B]" : "text-[#05073C]"}`}>
                              {item.q}
                            </span>
                            <span className={`flex-shrink-0 ${isOpen ? "text-[#EB662B]" : "text-gray-400"}`}>
                              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6 pt-0">
                              <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                {item.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Still need help */}
          <div className="mt-16 bg-[#05073C] rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-white text-2xl font-extrabold mb-3">Still Need Help?</h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto text-sm">
                Our support team is available 24/7 to assist you with any questions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button className="px-8 py-3 text-white font-bold rounded-xl">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EB662B]/10 blur-3xl rounded-full -mr-20" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FAQPage;
