"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const heroImages = [
  "/assets/heroImage1.jpg",
  "/assets/heroImage2.jpg",
  "/assets/heroImage3.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div className={`absolute inset-0 min-h-[80vh] w-100vw `}>
        <Image
          src={heroImages[current]}
          alt="Hero Background"
          fill
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1s ease-in-out",
            opacity: loaded ? 1 : 0,
          }}
          onLoad={() => setLoaded(true)}
        />
      </div>
      {loaded && (
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
            <div
              className="mt-6 font-bold"
              style={{ color: "var(--deep-red)" }}
            >
              Image not found or failed to load.
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
