import React from 'react';

const GalleryCallToAction = () => {
  return (
    <section className="py-16" style={{background: 'var(--charcoal-black)'}}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{color: 'var(--soft-white)'}}
          >
            Share Your Mental Health Journey
          </h2>
          <p 
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{color: 'var(--soft-white)'}}
          >
            Have photos from mental health events, awareness campaigns, or wellness activities? 
            We'd love to feature your contributions in our gallery and inspire others across Africa.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--deep-red)',
              color: 'var(--soft-white)'
            }}
          >
            Submit Your Photos
          </button>
          <button 
            className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'var(--deep-red)',
              color: 'var(--deep-red)',
              background: 'transparent'
            }}
          >
            Join Our Events
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{background: 'var(--deep-red)'}}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{color: 'var(--soft-white)'}}
            >
              Share Impact
            </h3>
            <p 
              className="text-sm"
              style={{color: 'var(--soft-white)'}}
            >
              Your photos help document the real impact of mental health awareness across communities.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{background: 'var(--deep-red)'}}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{color: 'var(--soft-white)'}}
            >
              Build Community
            </h3>
            <p 
              className="text-sm"
              style={{color: 'var(--soft-white)'}}
            >
              Connect with others working towards mental health awareness and support.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{background: 'var(--deep-red)'}}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{color: 'var(--soft-white)'}}
            >
              Inspire Change
            </h3>
            <p 
              className="text-sm"
              style={{color: 'var(--soft-white)'}}
            >
              Your stories and images inspire others to take action for mental health.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default GalleryCallToAction; 