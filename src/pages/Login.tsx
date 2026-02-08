import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Ui/Input";
import Button from "../components/Ui/Button";
import OAuthButton from "../components/Ui/OAuthButton";
import ErrorMessage from "../components/Ui/ErrorMessage";

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [generalError, setGeneralError] = useState("");
    const [oAuthLoading, setOAuthLoading] = useState<{
        google: boolean;
        facebook: boolean;
    }>({ google: false, facebook: false });

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setGeneralError("");
        if (!validate()) return;

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            if (formData.email === "test@example.com" && formData.password === "password") {
                setIsLoading(false);
                navigate("/");
            } else {
                setIsLoading(false);
                setGeneralError("Invalid email or password");
            }
        }, 1500);
    };

    const handleOAuthLogin = (provider: "google" | "facebook") => {
        setOAuthLoading((prev) => ({ ...prev, [provider]: true }));
        // Simulate OAuth
        setTimeout(() => {
            setOAuthLoading((prev) => ({ ...prev, [provider]: false }));
            navigate("/");
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="text-center">
                    <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Please enter your details to sign in
                    </p>
                </div>

                {generalError && <ErrorMessage message={generalError} />}

                <div className="flex flex-col gap-3 mt-8">
                    <OAuthButton
                        provider="google"
                        onClick={() => handleOAuthLogin("google")}
                        isLoading={oAuthLoading.google}
                        disabled={isLoading || oAuthLoading.facebook}
                    />
                    <OAuthButton
                        provider="facebook"
                        onClick={() => handleOAuthLogin("facebook")}
                        isLoading={oAuthLoading.facebook}
                        disabled={isLoading || oAuthLoading.google}
                    />
                </div>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                            Or continue with email
                        </span>
                    </div>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <Input
                            label="Email address"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            disabled={isLoading}
                        />
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900 cursor-pointer"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                                onClick={(e) => e.preventDefault()}
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-lg transition-colors duration-200"
                        isLoading={isLoading}
                        disabled={oAuthLoading.google || oAuthLoading.facebook}
                    >
                        Sign in
                    </Button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/sign-up"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
