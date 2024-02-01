import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ComingSoon from "./pages/404";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<ComingSoon />} />
    </>
  )
);

export default router;
