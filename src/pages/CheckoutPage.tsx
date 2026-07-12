import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useUser } from "@clerk/react";
import {
  FaCreditCard,
  FaPaypal,
  FaApplePay,
  FaLock,
  FaArrowLeft,
  FaCheck,
  FaCalendarAlt,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { toast } from "sonner";
import SectionWrapper from "../components/sections/SectionWrapper";

interface BookingState {
  type: "hotel" | "tour" | "package" | "transport";
  name: string;
  image: string;
  price: number;
  priceLabel: string;
  location?: string;
  duration?: string;
  roomName?: string;
}

const paymentTabs = [
  { id: "card", label: "Credit Card", icon: FaCreditCard },
  { id: "paypal", label: "PayPal", icon: FaPaypal },
  { id: "apple", label: "Apple Pay", icon: FaApplePay },
] as const;

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isSignedIn } = useUser();

  const bookingData = location.state as BookingState | null;

  const [activePaymentTab, setActivePaymentTab] = useState<string>("card");
  const [guestCount, setGuestCount] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Contact form fields
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  // Card form fields
  const [cardForm, setCardForm] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  // Pre-fill from Clerk user
  useEffect(() => {
    if (user) {
      setContactForm((prev) => ({
        ...prev,
        fullName: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
        phone: user.primaryPhoneNumber?.phoneNumber || "",
      }));
    }
  }, [user]);

  // If no booking data, redirect to home
  if (!bookingData) {
    return (
      <SectionWrapper className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaShieldAlt className="text-3xl text-[#EB662B]" />
          </div>
          <h2 className="text-2xl font-bold text-[#05073C] mb-3">No Booking Selected</h2>
          <p className="text-gray-500 mb-8">
            Please select a hotel, tour, package, or transportation to book first.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#EB662B] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#d45a25] transition-all shadow-md hover:shadow-lg"
          >
            <FaArrowLeft /> Browse Options
          </Link>
        </div>
      </SectionWrapper>
    );
  }

  // Calculate pricing
  const nights = checkInDate && checkOutDate
    ? Math.max(1, Math.ceil((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / 86400000))
    : 1;
  const isHotel = bookingData.type === "hotel";
  const subtotal = isHotel ? bookingData.price * nights * guestCount : bookingData.price * guestCount;
  const taxRate = 0.12;
  const serviceFee = 9.99;
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes + serviceFee;

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 16);
    return cleaned.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length >= 2) return cleaned.slice(0, 2) + "/" + cleaned.slice(2);
    return cleaned;
  };

  const handleSubmit = () => {
    // Validate
    if (!contactForm.fullName || !contactForm.email) {
      toast.error("Please fill in your contact information.");
      return;
    }
    if (activePaymentTab === "card") {
      if (!cardForm.cardNumber || !cardForm.cardName || !cardForm.expiry || !cardForm.cvv) {
        toast.error("Please fill in all payment details.");
        return;
      }
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const ref = "BK-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Date.now().toString(36).toUpperCase();
      setBookingRef(ref);
      setIsProcessing(false);
      setIsSuccess(true);
      toast.success("Booking confirmed! 🎉");
    }, 2500);
  };

  // ─── Success State ────────────────────────────
  if (isSuccess) {
    return (
      <SectionWrapper className="bg-gray-50 min-h-screen pt-8 pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Confetti Decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#EB662B] via-[#f59e0b] to-[#10b981]" />

            {/* Success Icon */}
            <div className="relative mx-auto mb-6 w-20 h-20">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-30" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                <FaCheck className="text-white text-3xl" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#05073C] mb-2">Booking Confirmed!</h2>
            <p className="text-gray-500 mb-8">
              Your adventure is booked. We've sent the details to your email.
            </p>

            {/* Booking Details Card */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={bookingData.image}
                  alt={bookingData.name}
                  className="w-20 h-20 rounded-xl object-cover shadow-sm"
                />
                <div>
                  <h3 className="font-bold text-[#05073C] text-lg">{bookingData.name}</h3>
                  {bookingData.roomName && (
                    <p className="text-sm text-gray-500">{bookingData.roomName}</p>
                  )}
                  <span className="inline-block mt-1 px-2.5 py-0.5 bg-[#EB662B]/10 text-[#EB662B] text-xs font-semibold rounded-full capitalize">
                    {bookingData.type}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 font-medium">Reference</span>
                  <p className="text-[#05073C] font-bold mt-0.5 font-mono">{bookingRef}</p>
                </div>
                <div>
                  <span className="text-gray-400 font-medium">Total Paid</span>
                  <p className="text-[#05073C] font-bold mt-0.5">${total.toFixed(2)}</p>
                </div>
                <div>
                  <span className="text-gray-400 font-medium">Guests</span>
                  <p className="text-[#05073C] font-bold mt-0.5">{guestCount}</p>
                </div>
                <div>
                  <span className="text-gray-400 font-medium">Status</span>
                  <p className="text-green-600 font-bold mt-0.5 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Confirmed
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate("/")}
                className="px-8 py-3 bg-[#EB662B] text-white font-semibold rounded-xl hover:bg-[#d45a25] transition-all shadow-md hover:shadow-lg"
              >
                Back to Home
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(bookingRef);
                  toast.success("Reference copied!");
                }}
                className="px-8 py-3 border-2 border-gray-200 text-[#05073C] font-semibold rounded-xl hover:bg-gray-50 transition-all"
              >
                Copy Reference
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  // ─── Main Checkout Layout ─────────────────────
  return (
    <SectionWrapper className="bg-gray-50 min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#EB662B] text-sm font-medium transition-colors"
          >
            <FaArrowLeft />
            Back
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#05073C] mb-2">Checkout</h1>
        <p className="text-gray-500 font-medium mb-8">Complete your booking in just a few steps</p>

        {/* Auth Gate */}
        {!isSignedIn && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
              <FaShieldAlt className="text-amber-600 text-xl" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-amber-800">Sign in to continue</h3>
              <p className="text-amber-700 text-sm mt-0.5">
                Please sign in to complete your booking. Your information will be pre-filled.
              </p>
            </div>
            <Link
              to="/login"
              className="px-6 py-2.5 bg-[#EB662B] text-white font-semibold rounded-xl hover:bg-[#d45a25] transition-all text-sm shadow-md"
            >
              Sign In
            </Link>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ─── Left Column: Forms ─── */}
          <div className="flex-1 space-y-6">

            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#EB662B] rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <h2 className="text-xl font-bold text-[#05073C]">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={contactForm.fullName}
                    onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Special Requests</label>
                  <textarea
                    value={contactForm.specialRequests}
                    onChange={(e) => setContactForm({ ...contactForm, specialRequests: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm resize-none"
                    placeholder="Any special requests or notes..."
                  />
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#EB662B] rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <h2 className="text-xl font-bold text-[#05073C]">Booking Details</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {isHotel && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        <FaCalendarAlt className="inline mr-1.5 text-[#EB662B]" />
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        <FaCalendarAlt className="inline mr-1.5 text-[#EB662B]" />
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        min={checkInDate || new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm"
                      />
                    </div>
                  </>
                )}

                {!isHotel && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      <FaCalendarAlt className="inline mr-1.5 text-[#EB662B]" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaUsers className="inline mr-1.5 text-[#EB662B]" />
                    Guests
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="px-4 py-3 text-gray-500 hover:bg-gray-50 transition-colors font-bold text-lg"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center font-bold text-[#05073C]">{guestCount}</span>
                    <button
                      onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
                      className="px-4 py-3 text-gray-500 hover:bg-gray-50 transition-colors font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#EB662B] rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <h2 className="text-xl font-bold text-[#05073C]">Payment Method</h2>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
                {paymentTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePaymentTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activePaymentTab === tab.id
                        ? "bg-white text-[#05073C] shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <tab.icon className={activePaymentTab === tab.id ? "text-[#EB662B]" : ""} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Card Form */}
              {activePaymentTab === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cardForm.cardNumber}
                        onChange={(e) => setCardForm({ ...cardForm, cardNumber: formatCardNumber(e.target.value) })}
                        className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm tracking-wider"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                      <FaCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Cardholder Name</label>
                    <input
                      type="text"
                      value={cardForm.cardName}
                      onChange={(e) => setCardForm({ ...cardForm, cardName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm"
                      placeholder="Name on card"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Expiry Date</label>
                      <input
                        type="text"
                        value={cardForm.expiry}
                        onChange={(e) => setCardForm({ ...cardForm, expiry: formatExpiry(e.target.value) })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">CVV</label>
                      <div className="relative">
                        <input
                          type="password"
                          value={cardForm.cvv}
                          onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EB662B] focus:ring-2 focus:ring-[#EB662B]/20 transition-all outline-none text-sm"
                          placeholder="•••"
                          maxLength={4}
                        />
                        <FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PayPal */}
              {activePaymentTab === "paypal" && (
                <div className="text-center py-8">
                  <FaPaypal className="text-5xl text-[#003087] mx-auto mb-4" />
                  <p className="text-gray-600 text-sm mb-4">
                    You will be redirected to PayPal to complete your payment.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                    <FaShieldAlt /> Secure PayPal Checkout
                  </div>
                </div>
              )}

              {/* Apple Pay */}
              {activePaymentTab === "apple" && (
                <div className="text-center py-8">
                  <FaApplePay className="text-6xl text-black mx-auto mb-4" />
                  <p className="text-gray-600 text-sm mb-4">
                    Use Touch ID or Face ID to complete your payment.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    <FaShieldAlt /> Encrypted Apple Pay
                  </div>
                </div>
              )}

              {/* Security Note */}
              <div className="flex items-center gap-2 mt-6 text-xs text-gray-400">
                <FaLock />
                <span>Your payment information is encrypted and secure. We never store your card details.</span>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Order Summary ─── */}
          <div className="lg:w-[400px] shrink-0">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-[#05073C] mb-6">Order Summary</h3>

              {/* Item Preview */}
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-100">
                <img
                  src={bookingData.image}
                  alt={bookingData.name}
                  className="w-24 h-20 rounded-xl object-cover shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[#05073C] text-sm leading-tight line-clamp-2">{bookingData.name}</h4>
                  {bookingData.roomName && (
                    <p className="text-xs text-gray-500 mt-0.5">{bookingData.roomName}</p>
                  )}
                  <span className="inline-block mt-1.5 px-2 py-0.5 bg-[#EB662B]/10 text-[#EB662B] text-xs font-semibold rounded-full capitalize">
                    {bookingData.type}
                  </span>
                  {bookingData.location && (
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[#EB662B]" />
                      {bookingData.location}
                    </p>
                  )}
                  {bookingData.duration && (
                    <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                      <FaClock className="text-[#EB662B]" />
                      {bookingData.duration}
                    </p>
                  )}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    ${bookingData.price.toFixed(2)} × {guestCount} guest{guestCount > 1 ? "s" : ""}
                    {isHotel ? ` × ${nights} night${nights > 1 ? "s" : ""}` : ""}
                  </span>
                  <span className="text-[#05073C] font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Taxes & fees (12%)</span>
                  <span className="text-[#05073C] font-semibold">${taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Service fee</span>
                  <span className="text-[#05073C] font-semibold">${serviceFee.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-baseline mb-8">
                <span className="text-lg font-bold text-[#05073C]">Total</span>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#EB662B]">${total.toFixed(2)}</span>
                  <span className="block text-xs text-gray-400">Including taxes & fees</span>
                </div>
              </div>

              {/* Submit Button */}
              {isSignedIn && (
                <button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="w-full py-4 bg-gradient-to-r from-[#EB662B] to-[#d45a25] text-white font-bold text-lg rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaLock className="text-sm" />
                      Complete Booking
                    </>
                  )}
                </button>
              )}

              {!isSignedIn && (
                <Link
                  to="/login"
                  className="w-full py-4 bg-gradient-to-r from-[#EB662B] to-[#d45a25] text-white font-bold text-lg rounded-xl hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Sign In to Book
                </Link>
              )}

              <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1.5">
                <FaShieldAlt />
                Free cancellation up to 24 hours before
              </p>

              {/* Accepted Payments */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center mb-3">Accepted payment methods</p>
                <div className="flex items-center justify-center gap-3 opacity-60">
                  {["/images/visa.png", "/images/mastercard.png", "/images/applepay.png", "/images/paypal.png"].map((src, idx) => (
                    <img key={idx} src={src} alt="payment" className="h-6 object-contain" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CheckoutPage;
