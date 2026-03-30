import { useState, type FormEvent } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Ui/Button";
import Input from "../components/Ui/Input";
import SectionWrapper from "../components/sections/SectionWrapper";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-xl" />,
    title: "Our Office",
    lines: ["328 Queensberry Street", "North Melbourne VIC 3051, Australia"],
  },
  {
    icon: <FaPhone className="text-xl" />,
    title: "Phone",
    lines: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    title: "Email",
    lines: ["hi@viatours.com", "support@viatours.com"],
  },
  {
    icon: <FaClock className="text-xl" />,
    title: "Hours",
    lines: ["Mon – Fri: 9am – 6pm", "Sat – Sun: 10am – 4pm"],
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1920"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#05073C]/65" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="inline-block bg-[#EB662B]/20 text-[#EB662B] border border-[#EB662B]/30 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
            We'd Love to Hear From You
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Questions, feedback, or partnership inquiries — our team is here to
            help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col gap-3"
          >
            <div className="w-12 h-12 bg-[#EB662B]/10 rounded-2xl flex items-center justify-center text-[#EB662B]">
              {info.icon}
            </div>
            <h3 className="font-bold text-[#05073C]">{info.title}</h3>
            {info.lines.map((line, j) => (
              <p key={j} className="text-sm text-gray-500">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Form + Map */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-12 gap-4">
                <FaCheckCircle className="text-green-500 text-6xl" />
                <h2 className="text-2xl font-bold text-[#05073C]">
                  Message Sent!
                </h2>
                <p className="text-gray-500 max-w-sm">
                  Thanks for reaching out. Our team will get back to you within
                  24 hours.
                </p>
                <Button
                  className="mt-4 px-8 py-3 text-white rounded-xl font-bold"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-[#05073C] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 mb-8 text-sm">
                  Fill in the form below and we'll get back to you as soon as
                  possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Full Name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      disabled={isLoading}
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      disabled={isLoading}
                    />
                  </div>
                  <Input
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    disabled={isLoading}
                  />
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-[#05073C]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us more..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isLoading}
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB662B] resize-none transition ${
                        errors.message
                          ? "border-red-400"
                          : "border-gray-200"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full py-4 text-white font-bold rounded-xl"
                    isLoading={isLoading}
                  >
                    Send Message
                  </Button>
                </form>
              </>
            )}
          </div>

          {/* Map placeholder */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex-1 min-h-80">
              <iframe
                title="Viatours Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f52cf1%3A0x5045675218ce6e0!2sNorth%20Melbourne%20VIC%203051%2C%20Australia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "340px" }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="bg-[#05073C] rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-white/70 text-sm mb-5">
                Our 24/7 support team is available via live chat for urgent
                booking issues.
              </p>
              <Link to="/help">
                <Button className="bg-[#EB662B] hover:bg-[#d45a22] text-white px-6 py-3 rounded-xl font-bold text-sm">
                  Visit Help Center
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-[#EB662B] hover:underline font-medium">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
