import { SignUp } from "@clerk/react";

const SignUpPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-orange-50/30 py-12 px-4 sm:px-6 lg:px-8">
            <SignUp
                routing="path"
                path="/sign-up"
                signInUrl="/login"
                fallbackRedirectUrl="/"
                appearance={{
                    elements: {
                        rootBox: "w-full max-w-md",
                        cardBox: "w-full shadow-xl rounded-2xl border border-gray-100",
                        card: "rounded-2xl shadow-none",
                        headerTitle: "text-2xl font-extrabold text-gray-900",
                        headerSubtitle: "text-sm text-gray-500",
                        socialButtonsBlockButton:
                            "rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 font-medium",
                        socialButtonsBlockButtonText: "font-medium text-gray-700",
                        formFieldInput:
                            "rounded-lg border-gray-300 focus:border-[#EB662B] focus:ring-[#EB662B]",
                        formButtonPrimary:
                            "bg-[#EB662B] hover:bg-[#d45a25] rounded-lg text-white font-semibold transition-colors duration-200 shadow-md hover:shadow-lg",
                        footerActionLink:
                            "text-[#EB662B] hover:text-[#d45a25] font-medium",
                        dividerLine: "bg-gray-200",
                        dividerText: "text-gray-400 text-sm",
                        formFieldLabel: "text-gray-700 font-medium",
                        identityPreviewEditButton:
                            "text-[#EB662B] hover:text-[#d45a25]",
                    },
                }}
            />
        </div>
    );
};

export default SignUpPage;
