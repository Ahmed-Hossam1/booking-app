import { Link } from "react-router-dom";
import SectionWrapper from "../components/sections/SectionWrapper";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, including your name, email address, phone number, payment information, and travel preferences when you create an account, make a booking, or contact our support team.

We also automatically collect certain information when you use our services, including your IP address, browser type, device information, pages visited, and how you interact with our platform.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:
• Process bookings and payments and send you confirmations and receipts
• Provide customer support and respond to inquiries
• Send you promotional communications (you may opt out at any time)
• Improve our services, personalize your experience, and perform analytics
• Comply with legal obligations and prevent fraud`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:
• With tour operators and service providers necessary to complete your booking
• With payment processors to handle transactions securely
• With law enforcement when required by applicable law
• With your consent or at your direction`,
  },
  {
    title: "4. Data Retention",
    content: `We retain personal data for as long as necessary to provide our services and comply with legal obligations. Account information is kept for the duration of your account. Booking records are kept for up to 7 years for tax and audit purposes. You may request deletion of your data at any time.`,
  },
  {
    title: "5. Security",
    content: `We take reasonable measures to protect your personal data from unauthorized access, use, or disclosure. All data is transmitted using SSL/TLS encryption, and sensitive payment information is handled by PCI-DSS compliant processors. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: "6. Cookies and Tracking",
    content: `We use cookies and similar technologies to recognize your browser, remember your preferences, analyze site traffic, and serve personalized content. You can control cookies through your browser settings. Disabling cookies may affect the functionality of our site.`,
  },
  {
    title: "7. Your Rights",
    content: `Depending on your location, you may have the right to:
• Access, correct, or delete the personal data we hold about you
• Object to or restrict our processing of your data
• Request a portable copy of your data
• Withdraw consent where processing is based on consent

To exercise these rights, contact us at privacy@viatours.com.`,
  },
  {
    title: "8. International Transfers",
    content: `Our services are operated from Australia and the United States. If you are located in the European Economic Area or United Kingdom, your data may be transferred to and processed in countries with different data protection laws. We ensure appropriate safeguards are in place.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If we discover that a child has provided us with personal information, we will delete it promptly.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify registered users by email and post a notice on our website when significant changes are made. Continued use of our services after such changes indicates your acceptance of the updated policy.`,
  },
];

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#05073C] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#EB662B]/20 text-[#EB662B] border border-[#EB662B]/30 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">
            Last updated: January 1, 2025
          </p>
        </div>
      </div>

      <SectionWrapper className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-10">
            <Link to="/" className="text-[#EB662B] hover:underline font-medium">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Privacy Policy</span>
          </div>

          {/* Intro */}
          <div className="bg-[#EB662B]/5 border border-[#EB662B]/20 rounded-2xl p-6 mb-10">
            <p className="text-sm text-gray-700 leading-relaxed">
              Viatours ("we," "our," or "us") respects your privacy and is committed to
              protecting your personal data. This Privacy Policy explains how we collect,
              use, share, and safeguard information when you use our website and services.
              By using Viatours, you agree to the practices described in this policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                <h2 className="text-lg font-extrabold text-[#05073C] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#EB662B]/10 rounded-xl flex items-center justify-center text-[#EB662B] font-black text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  {section.title.replace(/^\d+\.\s/, "")}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-10 bg-[#05073C] rounded-2xl p-8 text-white text-center">
            <h3 className="font-extrabold text-xl mb-2">Questions About Privacy?</h3>
            <p className="text-white/60 text-sm mb-6">
              Contact our Data Protection Officer at{" "}
              <a href="mailto:privacy@viatours.com" className="text-[#EB662B] hover:underline">
                privacy@viatours.com
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
              to="/terms"
              className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition text-center"
            >
              <h4 className="font-bold text-[#05073C] mb-1">Terms & Conditions</h4>
              <p className="text-xs text-gray-400">Read our full terms of service</p>
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

export default PrivacyPage;
