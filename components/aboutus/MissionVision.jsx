import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-3" style={{color: 'var(--deep-red)'}}>
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed" style={{color: 'var(--charcoal-black)'}}>
            To empower individuals with the knowledge and resources to maintain mental well being and support individuals with mental illness.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-3" style={{color: 'var(--deep-red)'}}>
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed" style={{color: 'var(--charcoal-black)'}}>
            A community where mental health is prioritized, understood and natured for all
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision; 