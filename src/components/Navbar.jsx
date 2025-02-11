import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-4 p-4 bg-gray-800 text-white">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/transformations" className="hover:underline">
        Transformations
      </Link>
      <Link to="/sales" className="hover:underline">
        Sales
      </Link>
      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
    </nav>
  );
}
