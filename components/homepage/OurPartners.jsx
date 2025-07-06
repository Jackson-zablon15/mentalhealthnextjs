import React from "react";

const partners = [
  {
    name: "Muhimbili University of Health and Allied Sciences (MUHAS)",
    logo: '/assets/muhas-logo.png',
  },
  { name: "Mirembe Hospital", logo: '/assets/mirembe-logo.png' },
];

const OurPartners = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-[var(--deep-red)]">
        Our Partners
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-6 w-full max-w-xs flex-1"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <div className="font-semibold text-center text-gray-700">
              {partner.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurPartners;
