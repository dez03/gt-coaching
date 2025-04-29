import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TransformationPage from "./pages/Transformation";
import Shop from "./pages/Shop";
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
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}
