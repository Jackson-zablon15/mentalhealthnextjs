"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      style={{ background: "#13252D" }}
      className="shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex  items-center">
            <Link href="/">
              <img
                src={"/assets/mainlogo.png"}
                alt="Mental Health Africa Logo"
                className="h-20 w-auto mr-2"
              />
            </Link>
            <span className="text-white font-semibold text-lg sm:text-xl sm:inline">
              Mental Health Africa
            </span>
          </div>
          <div className="hidden md:flex space-x-6 items-center pb-1">
            <Link
              href="/"
              className="nav-link font-medium"
              style={{ color: "#FFFFFF", paddingTop: "8px" }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav-link font-medium"
              style={{ color: "#FFFFFF", paddingTop: "8px" }}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="nav-link font-medium"
              style={{ color: "#FFFFFF", paddingTop: "8px" }}
            >
              Blog
            </Link>
            <Link
              href="/events"
              className="nav-link font-medium"
              style={{ color: "#FFFFFF", paddingTop: "8px" }}
            >
              Events
            </Link>
            <Link
              href="/contacts"
              className="nav-link font-medium"
              style={{ color: "#FFFFFF", paddingTop: "8px" }}
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="nav-link font-medium flex items-center justify-center"
              style={{
                background: "#D72638",
                color: "#FFFFFF",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.375rem",
                fontWeight: 500,
                transition: "background 0.2s",
                marginBottom: "-2px",
              }}
            >
              Donate
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                // Close (X) icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#13252D] px-4 py-4 rounded-b shadow-lg absolute left-0 right-0 top-20 z-40 flex flex-col space-y-4">
            <Link
              href="/"
              className="nav-link font-medium"
              style={{ color: "#FFFFFF" }}
            >
              Home
            </Link>
            <a
              href="/about"
              className="nav-link font-medium"
              style={{ color: "#FFFFFF" }}
            >
              About
            </a>
            <a
              href="/blog"
              className="nav-link font-medium"
              style={{ color: "#FFFFFF" }}
            >
              Blog
            </a>
            <a
              href="/events"
              className="nav-link font-medium"
              style={{ color: "#FFFFFF" }}
            >
              Events
            </a>
            <a
              href="/contact"
              className="nav-link font-medium"
              style={{ color: "#FFFFFF" }}
            >
              Contact Us
            </a>
            <a
              href="/"
              className="nav-link font-medium flex items-center justify-center"
              style={{
                background: "#D72638",
                color: "#FFFFFF",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.375rem",
                fontWeight: 500,
                transition: "background 0.2s",
              }}
            >
              Donate
            </a>
          </div>
        )}
      </div>
      <style>{`
        .nav-link:hover {
          text-decoration: underline;
          text-decoration-color: #D72638;
          text-underline-offset: 4px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
