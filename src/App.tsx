import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import TestDetailsPage from "./pages/test-details";
import SettingsPage from "./pages/settings-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test/:id" element={<TestDetailsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
