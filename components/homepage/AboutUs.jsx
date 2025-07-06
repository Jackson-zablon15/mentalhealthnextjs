import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--deep-red)'}}>About Mental Health Africa</h2>
          <p className="mb-6" style={{color: 'var(--charcoal-black)'}}>Mental Health Africa is a registered non-governmental organization founded in 2024 committed to raising Mental Health , reducing stigma and supporting mentally challenged individuals. While championing the sustainable development goal we believe <i>There is no health without mental health</i> </p>
          <Link href="/about" className="inline-block px-6 py-2 rounded font-medium transition" style={{background: 'var(--grayish-blue)', color: 'var(--soft-white)'}}>Read More</Link>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="flex flex-col items-center bg-[#e8f0fe] rounded-lg p-8 shadow-md w-full ">
              <svg className="w-10 h-10 mb-2 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--deep-red)'}}>Our Vision</h3>
              <p className="text-gray-700 text-center">A community where mental health is prioritized, understood and natured for all.</p>
            </div>
            <div className="flex flex-col items-center bg-[#fef6e8] rounded-lg p-8 shadow-md w-full">
              <svg className="w-10 h-10 mb-2 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--deep-red)'}}>Our Mission</h3>
              <p className="text-gray-700 text-center">To empower individuals with the knowledge and resources to maintain mental well being and support individuals with mental illness.</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end md:pl-16">
          <img src={'/assets/aboutUs.jpg'} alt="About Mental Health Africa" className="w-56 h-56 object-cover rounded-full shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
