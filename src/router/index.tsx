import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Service from "../pages/Service";
import HomePage from "../pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="Services" element={<Service />} />
    </Route>,
  ),
);

export default router;
