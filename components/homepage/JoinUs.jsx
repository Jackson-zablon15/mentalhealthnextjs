import Link from 'next/link';
import React from 'react';

const JoinUs = () => (
  <section className="relative py-20 flex items-center justify-center" style={{backgroundImage: `url('/assets/heroImage1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Mental Wellness Movement</h2>
      <p className="text-lg md:text-xl mb-8 text-gray-100">Become a volunteer, mentor, or partner and help us bring mental health awareness to communities across Africa.</p>
      <Link href="/contacts" className="inline-block px-8 py-4 rounded-lg font-bold text-lg bg-[var(--deep-red)] text-white shadow-lg hover:bg-[var(--grayish-blue)] transition-colors duration-200">Join Us</Link>
    </div>
  </section>
);

export default JoinUs; 