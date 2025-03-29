import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TransformationPage from "./pages/Transformation";
import SalesPage from "./pages/Sales";
import ContactPage from "./pages/Contact";
import "./styles/index.css";

import Navbar from "./components/Navbar"; 

export default function App() {
  return (
    <div classname="bg-red-600">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transformations" element={<TransformationPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}
