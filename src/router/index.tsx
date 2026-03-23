import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Services" element={<Service />} />
        <Route path="explore/:destination" element={<ExplorePage />} />
        <Route path="hotels" element={<HotelsPage />} />
        <Route path="hotels/:hotelId" element={<HotelDetailsPage />} />
        <Route path="transportation" element={<TransportationPage />} />
        <Route path="transportation/:transportId" element={<TransportationDetailsPage />} />
        <Route path="packages" element={<TravelPackagesPage />} />
        <Route path="packages/:packageId" element={<TravelPackageDetailsPage />} />
        <Route path="tours" element={<ToursPage />} />
        <Route path="tours/:tourId" element={<TourDetailsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </>
  )
);

export default router;
