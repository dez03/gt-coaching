import { useState } from "react";
import { Link } from "react-router-dom";
import DumbbellIcon from "../assets/GTLogo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3 flex items-center justify-between top-0 sticky z-50">      {/* Logo / Brand */}
      <div className="flex items-center">
        <img
          src={DumbbellIcon}
          alt="Logo"
          className="h-8 w-auto mr-2"
        />
        <span className="font-bold text-xl">GT COACHING</span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-300">
          Services
        </Link>
        <Link to="/shop" className="hover:text-gray-300">
          Shop
        </Link>
        <Link to="/transformations" className="hover:text-gray-300">
          Transformations
        </Link>
        <Link to="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden md:block">
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
          Shop Now
        </button>
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <button
        className="md:hidden flex items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            /* X (close) icon */
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 011.06 1.06L13.06 10.586l4.715 4.714a.75.75 0 01-1.06 1.06L12 11.646l-4.715 4.714a.75.75 0 01-1.06-1.06l4.714-4.715-4.714-4.715a.75.75 0 010-1.06z"
            />
          ) : (
            /* Hamburger icon */
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5h16a1 1 0 110 2H4a1 1 0 010-2zm0 6h16a1 1 0 110 2H4a1 1 0 010-2zm16 6H4a1 1 0 110-2h16a1 1 0 110 2z"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden z-10">
          <Link
            to="/"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/shop"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/transformations"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Transformations
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Try Glow
          </button>
        </div>
      )}
    </nav>
  );
}