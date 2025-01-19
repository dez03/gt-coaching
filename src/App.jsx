import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TransformationPage from "./pages/Transformation";
import SalesPage from "./pages/Sales";
import "./styles/index.css";

import Navbar from "./components/Navbar"; 

export default function App() {
  return (
    <div>
      <Navbar />

      <main className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transformations" element={<TransformationPage />} />
          <Route path="/sales" element={<SalesPage />} />
        </Routes>
      </main>
    </div>
  );
}
