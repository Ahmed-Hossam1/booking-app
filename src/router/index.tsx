import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Service from "../pages/Service";
import HomePage from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Services" element={<Service />} />
        <Route path="explore/:destination" element={<ExplorePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </>
  )
);

export default router;

