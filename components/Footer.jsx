import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ background: "#13252D", color: "#F7F9FA" }}
      className="py-10 mt-10"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-2xl mb-2">Mental Health Africa</div>
          <p className="text-green-100 mb-2">Empowering Minds Across Africa</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:underline">
                Donate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p>
            Email:{" "}
            <a href="mailto:info@mentalhealthafrica.org" className="underline">
              info@mentalhealthafrica.org
            </a>
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow Us</div>
          <div className="flex space-x-4">
            {/* X (Twitter) Icon */}
            <a href="#" aria-label="X" className="hover:text-green-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.53 3H21.25L13.62 10.87L22.5 21H16.07L10.77 14.53L4.77 21H1L9.08 12.56L0.5 3H7.09L11.85 8.84L17.53 3ZM16.32 19.13H18.14L6.78 4.76H4.82L16.32 19.13Z" />
              </svg>
            </a>
            {/* Instagram Icon (more visible) */}
            <a
              href="https://instagram.com/mentalhealthafr"
              aria-label="Instagram"
              className="hover:text-green-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-green-100 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Mental Health Africa. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
