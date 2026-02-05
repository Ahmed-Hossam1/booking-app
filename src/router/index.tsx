import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Service from "../pages/Service";
import HomePage from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="Services" element={<Service />} />
      <Route path="explore/:destination" element={<ExplorePage />} />
    </Route>,
  ),
);

export default router;

