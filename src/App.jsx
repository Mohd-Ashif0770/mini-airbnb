import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ExperiencesPage from "./pages/ExperiencesPage.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import PhotoTourPage from "./pages/PhotoTourPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/listing/:id" element={<ListingPage />} />
        <Route path="/listing/:id/photo-tour" element={<PhotoTourPage />} />
      </Routes>
    </BrowserRouter>
  );
}
