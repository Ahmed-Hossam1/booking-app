import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";

// Existing pages
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/Home";
import HotelDetailsPage from "../pages/HotelDetailsPage";
import HotelsPage from "../pages/HotelsPage";
import LoginPage from "../pages/Login";
import Service from "../pages/Service";
import SignUpPage from "../pages/SignUp";
import TourDetailsPage from "../pages/TourDetailsPage";
import ToursPage from "../pages/ToursPage";
import TransportationDetailsPage from "../pages/TransportationDetailsPage";
import TransportationPage from "../pages/TransportationPage";
import TravelPackageDetailsPage from "../pages/TravelPackageDetailsPage";
import TravelPackagesPage from "../pages/TravelPackagesPage";

// New pages
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import FAQPage from "../pages/FAQPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivacyPage from "../pages/PrivacyPage";
import SearchPage from "../pages/SearchPage";
import TermsPage from "../pages/TermsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Services" element={<Service />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="explore/:destination" element={<ExplorePage />} />
        <Route path="hotels" element={<HotelsPage />} />
        <Route path="hotels/:hotelId" element={<HotelDetailsPage />} />
        <Route path="transportation" element={<TransportationPage />} />
        <Route path="transportation/:transportId" element={<TransportationDetailsPage />} />
        <Route path="packages" element={<TravelPackagesPage />} />
        <Route path="packages/:packageId" element={<TravelPackageDetailsPage />} />
        <Route path="tours" element={<ToursPage />} />
        <Route path="tours/:tourId" element={<TourDetailsPage />} />
        <Route path="help" element={<FAQPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      {/* ── 404 catch-all ── */}
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default router;
