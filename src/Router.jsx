import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./landingPage";
import AboutSection from "./components/AboutSection/aboutSection";
import ComingSoon from "./components/404";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<ComingSoon />} />
    </>
  )
);

export default router;
