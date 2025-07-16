import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const GalleryHeader = ({ data }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      <div className={`absolute z-10 inset-0 min-h-[60vh] w-100vw `}>
        <Image
          src={"/assets/galleryBackground.webp"}
          alt="Hero Background"
          fill
          priority
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 1s ease-in-out",
          }}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute z-20 inset-0"
        style={{ background: "rgba(19,37,45,0.7)" }}
      ></div>

      {/* Content */}
      <div className="relative z-40 flex flex-col text-center px-4 py-20 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ color: "var(--soft-white)" }}
        >
          Our Gallery
        </h1>
        <p
          className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto"
          style={{ color: "var(--soft-white)" }}
        >
          Capturing moments of impact, community, and mental health
          transformation across Africa.
        </p>

        {/* Decorative elements */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div
            className="w-16 h-1"
            style={{ background: "var(--deep-red)" }}
          ></div>
          <div
            className="w-4 h-4 rounded-full"
            style={{ background: "var(--deep-red)" }}
          ></div>
          <div
            className="w-16 h-1"
            style={{ background: "var(--deep-red)" }}
          ></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--deep-red)" }}
            >
              <CountUp end={data && data.length} /> <span>+</span>
            </div>
            <div className="text-sm" style={{ color: "var(--soft-white)" }}>
              Events Albams
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--deep-red)" }}
            >
              <CountUp end={100} /> <span>+</span>
            </div>
            <div className="text-sm" style={{ color: "var(--soft-white)" }}>
              Photos Shared
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--deep-red)" }}
            >
              5
            </div>
            <div className="text-sm" style={{ color: "var(--soft-white)" }}>
              Categories
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--deep-red)" }}
            >
              2
            </div>
            <div className="text-sm" style={{ color: "var(--soft-white)" }}>
              Years of Impact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeader;
