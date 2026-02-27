import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Service from "../pages/Service";
import HomePage from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import HotelsPage from "../pages/HotelsPage";
import HotelDetailsPage from "../pages/HotelDetailsPage";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Services" element={<Service />} />
        <Route path="explore/:destination" element={<ExplorePage />} />
        <Route path="hotels" element={<HotelsPage />} />
        <Route path="hotels/:hotelId" element={<HotelDetailsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </>
  )
);

export default router;

