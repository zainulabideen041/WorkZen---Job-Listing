import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Show dashboard navbar only on dashboard page
  const isDashboard = location.pathname === "/dashboard";

  if (isDashboard && isAuthenticated) {
    return (
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-white shadow-sm border-b">
        {/* Left - Branding */}
        <div className="flex items-center gap-2">
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            Performance Review
          </h1>
        </div>

        {/* Center - Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Type here"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent"
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Notification Icon */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          {/* Sign Out Button */}
          <button
            onClick={handleLogout}
            className="hidden md:block px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium"
          >
            Sign Out
          </button>
          {/* Mobile Sign Out Icon */}
          <button
            onClick={handleLogout}
            className="md:hidden p-2 text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
        </div>
      </nav>
    );
  }

  // Original navbar for other pages
  return (
    <nav className="bg-[#4FD1C5] relative z-20">
      <div className="flex justify-between items-center px-6 md:px-16 py-6">
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          LOGO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            <li>
              <Link
                to="/pricing"
                className="text-white text-[15px] font-medium hover:opacity-80 transition-opacity duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white text-[15px] font-medium hover:opacity-80 transition-opacity duration-300"
              >
                Contact us
              </Link>
            </li>
          </ul>

          <div className="flex gap-4 items-center">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-7 py-3 bg-[#2c3e50] text-white rounded-md text-[15px] font-semibold hover:bg-[#34495e] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-7 py-3 bg-white/90 text-primary rounded-md text-[15px] font-semibold border border-white/80 hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-7 py-3 bg-[#2c3e50] text-white rounded-md text-[15px] font-semibold hover:bg-[#34495e] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-7 py-3 bg-white/90 text-primary rounded-md text-[15px] font-semibold border border-white/80 hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Try for free
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#4FD1C5] px-6 pb-6 shadow-lg absolute w-full left-0 top-full">
          <ul className="flex flex-col gap-4 list-none mb-6">
            <li>
              <Link
                to="/pricing"
                className="text-white text-lg font-medium block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white text-lg font-medium block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-7 py-3 bg-[#2c3e50] text-white rounded-md text-center font-semibold hover:bg-[#34495e]"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-7 py-3 bg-white/90 text-primary rounded-md font-semibold border border-white/80 hover:bg-white text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-7 py-3 bg-[#2c3e50] text-white rounded-md text-center font-semibold hover:bg-[#34495e]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-7 py-3 bg-white/90 text-primary rounded-md text-center font-semibold border border-white/80 hover:bg-white flex items-center justify-center gap-2"
                >
                  Try for free
                  <span>→</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
