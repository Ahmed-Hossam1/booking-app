import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaCheckCircle, FaLock } from "react-icons/fa";
import Input from "../components/Ui/Input";
import Button from "../components/Ui/Button";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Logo / Icon */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-3xl bg-[#EB662B]/10 flex items-center justify-center mb-4">
              {submitted ? (
                <FaCheckCircle className="text-4xl text-green-500" />
              ) : (
                <FaLock className="text-4xl text-[#EB662B]" />
              )}
            </div>
            {submitted ? (
              <>
                <h1 className="text-2xl font-extrabold text-[#05073C]">Check Your Email</h1>
                <p className="text-gray-500 text-sm text-center mt-2 max-w-xs">
                  We've sent a password reset link to{" "}
                  <span className="font-bold text-[#05073C]">{email}</span>.
                  It may take a few minutes to arrive.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-extrabold text-[#05073C]">Forgot Password?</h1>
                <p className="text-gray-500 text-sm text-center mt-2 max-w-xs">
                  No worries! Enter your email and we'll send you a secure link to reset your password.
                </p>
              </>
            )}
          </div>

          {submitted ? (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-sm text-green-700 text-center">
                Didn't receive the email? Check your spam folder or try again in 2 minutes.
              </div>
              <button
                onClick={() => { setSubmitted(false); setEmail(""); }}
                className="w-full py-3 border border-gray-200 text-gray-600 font-bold rounded-xl text-sm hover:bg-gray-50 transition cursor-pointer"
              >
                Try a different email
              </button>
              <Link
                to="/login"
                className="block w-full py-3 bg-[#EB662B] text-white font-bold rounded-xl text-sm text-center hover:bg-[#d45a22] transition"
              >
                Back to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  error={error}
                  disabled={isLoading}
                />
                <FaEnvelope className="absolute right-4 top-9 text-gray-400" />
              </div>

              <Button
                type="submit"
                className="w-full py-4 text-white font-bold rounded-xl"
                isLoading={isLoading}
              >
                Send Reset Link
              </Button>

              <Link
                to="/login"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#05073C] transition"
              >
                <FaArrowLeft className="text-xs" /> Back to Login
              </Link>
            </form>
          )}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Having trouble?{" "}
          <Link to="/contact" className="text-[#EB662B] hover:underline font-semibold">
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
