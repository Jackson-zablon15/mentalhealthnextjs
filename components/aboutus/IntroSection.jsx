import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div>
          <span className="text-md font-medium" style={{color: 'var(--midnight-navy)'}}>
            About Us
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold " style={{color: 'var(--deep-red)'}}>
          Transforming Mental Health in Africa
        </h1>
      </div>
    </section>
  );
};

export default IntroSection; 