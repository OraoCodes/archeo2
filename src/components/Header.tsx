import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "For Talent", path: "/for-talent" },
    { name: "Resume Review", path: "/resume-review" },
    { name: "For Startups", path: "/for-startups" },
    { name: "Outsourcing", path: "/outsourcing" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 py-3 bg-white fixed top-0 z-50">

      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <img
          src="/lovable-uploads/archeo_logo.png"
          alt="Archeohub Logo"
          className="w-12 h-12 object-contain"
        />
        <span className="text-lg font-bold text-black">Archeohub</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition
                  ${isActive
                    ? "bg-gray-100 border border-black text-black"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200"}
                `}
              >
                {item.name}
              </Link>
            </li>
          );
        })}

        <li>
          <Link
            to="/contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md md:hidden">
          <ul className="flex flex-col items-center py-6 space-y-4">

            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      px-6 py-2 rounded-lg text-sm font-medium transition
                      ${isActive
                        ? "bg-gray-100 border border-black text-black"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200"}
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}

            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;