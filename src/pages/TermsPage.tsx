import { Link } from "react-router-dom";
import SectionWrapper from "../components/sections/SectionWrapper";

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the Viatours website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all users including browsers, customers, and merchants.`,
  },
  {
    title: "Booking & Payment",
    content: `All bookings made through Viatours are subject to availability and confirmation. Prices are displayed in USD and are inclusive of applicable taxes unless stated otherwise. Full payment is required at the time of booking unless a deposit option is available. Viatours acts as an intermediary between customers and experience operators.`,
  },
  {
    title: "Cancellation Policy",
    content: `Cancellation policies vary by experience and are clearly stated on each listing page before booking. General guidelines:
• Cancellations made 48+ hours before: Full refund
• Cancellations made 24–48 hours before: 50% refund
• Cancellations made less than 24 hours before: No refund

Weather-related cancellations initiated by the operator: Full refund or rebooking.`,
  },
  {
    title: "User Responsibilities",
    content: `You agree to:
• Provide accurate and complete information when booking
• Arrive on time for your scheduled experiences
• Follow all safety guidelines provided by operators
• Treat operators, guides, and other travelers with respect
• Not engage in any illegal activities during experiences

Failure to comply may result in removal from the experience without a refund.`,
  },
  {
    title: "Intellectual Property",
    content: `All content on the Viatours platform — including text, images, logos, videos, and software — is the property of Viatours or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written permission.`,
  },
  {
    title: "Limitation of Liability",
    content: `Viatours acts as a marketplace connecting travelers with experience operators. We are not responsible for the actions, errors, or omissions of third-party operators. Our liability is limited to the amount paid for the booking in question. We are not liable for indirect, incidental, or consequential damages.`,
  },
  {
    title: "Operator Listings",
    content: `Operators are responsible for the accuracy of their listings, including descriptions, photos, pricing, availability, and safety information. Viatours reserves the right to remove listings or suspend operators that violate our standards or receive consistent negative reviews.`,
  },
  {
    title: "Reviews and Content",
    content: `By submitting reviews or any user-generated content, you grant Viatours a non-exclusive, royalty-free license to use, display, and distribute such content. Reviews must be honest and based on firsthand experience. Fake, defamatory, or misleading reviews will be removed.`,
  },
  {
    title: "Governing Law",
    content: `These Terms are governed by and construed in accordance with the laws of Victoria, Australia. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Victoria, Australia.`,
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. Significant changes will be communicated by email and a notice on the website. Continued use of the platform after changes constitutes acceptance of the revised terms.`,
  },
];

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#05073C] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#EB662B]/20 text-[#EB662B] border border-[#EB662B]/30 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-white/60 text-sm">Last updated: January 1, 2025</p>
        </div>
      </div>

      <SectionWrapper className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-10">
            <Link to="/" className="text-[#EB662B] hover:underline font-medium">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Terms & Conditions</span>
          </div>

          {/* Intro */}
          <div className="bg-[#EB662B]/5 border border-[#EB662B]/20 rounded-2xl p-6 mb-10">
            <p className="text-sm text-gray-700 leading-relaxed">
              Please read these Terms and Conditions carefully before using Viatours. These terms
              govern your access to and use of our website, mobile application, and all related
              services. By using Viatours, you confirm that you are at least 18 years old and legally
              capable of entering into binding agreements.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                <h2 className="text-lg font-extrabold text-[#05073C] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#EB662B]/10 rounded-xl flex items-center justify-center text-[#EB662B] font-black text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  {section.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-10 bg-[#05073C] rounded-2xl p-8 text-white text-center">
            <h3 className="font-extrabold text-xl mb-2">Have Questions About Our Terms?</h3>
            <p className="text-white/60 text-sm mb-6">
              Contact our legal team at{" "}
              <a href="mailto:legal@viatours.com" className="text-[#EB662B] hover:underline">
                legal@viatours.com
              </a>
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#EB662B] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#d45a22] transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Related */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              to="/privacy"
              className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition text-center"
            >
              <h4 className="font-bold text-[#05073C] mb-1">Privacy Policy</h4>
              <p className="text-xs text-gray-400">How we handle your data</p>
            </Link>
            <Link
              to="/help"
              className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition text-center"
            >
              <h4 className="font-bold text-[#05073C] mb-1">Help Center</h4>
              <p className="text-xs text-gray-400">Get answers to common questions</p>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TermsPage;
