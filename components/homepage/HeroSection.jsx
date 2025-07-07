"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";


const heroImages = [
  "/assets/heroImage1.jpg",
  "/assets/heroImage2.jpg",
  "/assets/heroImage3.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `url("${heroImages[current]}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div
        className={`absolute inset-0 ${heroImages[current] ? "" : ""}`}
        style={{ background: "rgba(19,37,45,0.6)" }}
      ></div>
      <div className="relative z-10 text-center px-4 py-20 max-w-2xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--soft-white)" }}
        >
          Empowering Minds Across Africa
        </h1>
        <p
          className="text-lg md:text-xl mb-8"
          style={{ color: "var(--soft-white)" }}
        >
          There is no health without Mental Health
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            style={{
              background: "var(--deep-red)",
              color: "var(--soft-white)",
            }}
            className="px-6 py-3 rounded font-semibold transition hover:opacity-90"
          >
            Learn More
          </Link>
          <Link
            href="/contacts"
            style={{
              background: "var(--grayish-blue)",
              color: "var(--soft-white)",
              border: "2px solid var(--deep-red)",
            }}
            className="px-6 py-3 rounded font-semibold transition hover:opacity-90"
          >
            Join Us
          </Link>
        </div>
        {!heroImages[current] && (
          <div className="mt-6 font-bold" style={{ color: "var(--deep-red)" }}>
            Image not found or failed to load.
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
