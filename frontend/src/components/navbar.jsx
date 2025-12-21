import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, List, X } from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="src/assets/react.svg" alt="logo" className="h-8" />
          <span className="text-xl font-semibold text-gray-900">Flowbite</span>
        </Link>

        {/* Desktop Menü */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            SAYFA 1
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            SAYFA 2
          </Link>

          <div
            className="relative py-4"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Etkinlikler
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {/* Açılır Menü */}
            <div
              className={`absolute left-0 top-full w-56 bg-white shadow-lg rounded-md py-2 border border-gray-100 transition-all duration-200 ${
                dropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
              style={{ zIndex: 200 }}
            >
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                ALT SAYFALAR 1
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                ALT SAYFALAR 2
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                ALT SAYFALAR 3
              </Link>
            </div>
          </div>

          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            İletişim
          </Link>
        </nav>

        {/* Hamburger Butonu (Mobil) */}
        <button
          className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <List />}
        </button>
      </div>

      {/* Mobil Menü */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col p-4 gap-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              SAYFA 1
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              SAYFA 2
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              ALT SAYFALAR 1
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              ALT SAYFALAR 2
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              ALT SAYFALAR 3
            </Link>
            <Link
              to="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setMobileOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
