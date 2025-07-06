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
              <Link href="/" className="hover:underline">
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
            <a href="#" aria-label="Twitter" className="hover:text-green-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.39 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-green-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-green-300 flex items-center"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16 7.2c2.1 0 2.4 0 3.2.1.8.1 1.2.2 1.5.4.4.2.7.4 1 .7.3.3.5.6.7 1 .2.3.3.7.4 1.5.1.8.1 1.1.1 3.2s0 2.4-.1 3.2c-.1.8-.2 1.2-.4 1.5-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.3.2-.7.3-1.5.4-.8.1-1.1.1-3.2.1s-2.4 0-3.2-.1c-.8-.1-1.2-.2-1.5-.4-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.2-.3-.3-.7-.4-1.5C7.2 18.4 7.2 18.1 7.2 16s0-2.4.1-3.2c.1-.8.2-1.2.4-1.5.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.3-.2.7-.3 1.5-.4C13.6 7.2 13.9 7.2 16 7.2zm0-1.2c-2.2 0-2.5 0-3.3.1-.8.1-1.4.2-1.9.4-.5.2-.9.5-1.3.9-.4.4-.7.8-.9 1.3-.2.5-.3 1.1-.4 1.9C7.2 13.5 7.2 13.8 7.2 16s0 2.5.1 3.3c.1.8.2 1.4.4 1.9.2.5.5.9.9 1.3.4.4.8.7 1.3.9.5.2 1.1.3 1.9.4.8.1 1.1.1 3.3.1s2.5 0 3.3-.1c.8-.1 1.4-.2 1.9-.4.5-.2.9-.5 1.3-.9.4-.4.7-.8.9-1.3.2-.5.3-1.1.4-1.9.1-.8.1-1.1.1-3.3s0-2.5-.1-3.3c-.1-.8-.2-1.4-.4-1.9-.2-.5-.5-.9-.9-1.3-.4-.4-.8-.7-1.3-.9-.5-.2-1.1-.3-1.9-.4-.8-.1-1.1-.1-3.3-.1zm0 3.2a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2zm0 9.2a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2zm6.4-9.6a1.3 1.3 0 1 0 0 2.88 1.3 1.3 0 0 0 0-2.88z" />
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
