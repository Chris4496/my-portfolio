import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const dropdown = useSpring({
    display: isOpen ? "block" : "none",
    height: isOpen ? "auto" : 0,
    opacity: isOpen ? 1 : 0,
    marginTop: isOpen ? 0 : -25,
    from: { height: 0, opacity: 0, marginTop: -25, display: "none" },
    config: { duration: 300 },
  });

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-2">
        <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center">
            <Link
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              to="/"
            >
              <span className="sr-only">Icon place holder</span>
              <svg
                className="block h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
              </svg>

            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
             
            </button>
          </div>
        </div>
      </div>
      <animated.div id="mobile-menu" style={dropdown}>
        <div className="mt-6 px-2 pt-2 pb-3 space-y-1 rounded-md">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white block px-3 py-2 rounded-md text-base font-medium text-xl sm:text-3xl"
            onClick={toggle}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white block px-3 py-2 rounded-md text-base font-medium text-xl sm:text-3xl"
            onClick={toggle}
          >
            About
          </Link>
          <Link
            to="/work"
            className="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white block px-3 py-2 rounded-md text-base font-medium text-xl sm:text-3xl"
            onClick={toggle}
          >
            Work
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white block px-3 py-2 rounded-md text-base font-medium text-xl sm:text-3xl"
            onClick={toggle}
          >
            Contact
          </Link>
        </div>
      </animated.div>
    </nav>
  );
}

export default NavBar;
