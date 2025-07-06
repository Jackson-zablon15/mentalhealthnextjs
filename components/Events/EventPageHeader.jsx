import React from 'react';

const EventPageHeader = () => {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `url("${'/assets/eventBackground.webp'}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{background: 'rgba(19,37,45,0.7)'}}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 py-12 max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{color: 'var(--soft-white)'}}
        >
          Our Events
        </h1>
        <p 
          className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto"
          style={{color: 'var(--soft-white)'}}
        >
          Join us in transforming mental health across Africa—online, in schools, and in your community.
        </p>
        
        {/* Decorative elements */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-16 h-1" style={{background: 'var(--deep-red)'}}></div>
          <div className="w-4 h-4 rounded-full" style={{background: 'var(--deep-red)'}}></div>
          <div className="w-16 h-1" style={{background: 'var(--deep-red)'}}></div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1" style={{color: 'var(--deep-red)'}}>15+</div>
            <div className="text-sm" style={{color: 'var(--soft-white)'}}>Events This Year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1" style={{color: 'var(--deep-red)'}}>1000+</div>
            <div className="text-sm" style={{color: 'var(--soft-white)'}}>People Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1" style={{color: 'var(--deep-red)'}}>12</div>
            <div className="text-sm" style={{color: 'var(--soft-white)'}}>Months of Impact</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPageHeader; 