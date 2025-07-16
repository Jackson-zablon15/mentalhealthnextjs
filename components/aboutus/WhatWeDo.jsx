import React from 'react';

const WhatWeDo = () => {
  return (
    <section className="py-16" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-6xl mx-auto px-6 sm:px-4">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{color: 'var(--deep-red)'}}>What We Do</h2>
        
        <div className="mb-12">
          <p className="text-lg leading-relaxed mb-8" style={{color: 'var(--charcoal-black)'}}>
            At the heart of our work is a commitment to creating safe, accessible, and empowering mental health support for individuals, organizations, and communities. Our services are tailored to educate, heal, and transform.
          </p>
        </div>

        {/* Safe Space Talks */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--deep-red)'}}>1. Safe Space Talks</h3>
              <p className="text-base leading-relaxed mb-4" style={{color: 'var(--charcoal-black)'}}>
                We create safe, non-judgmental spaces — especially for youth and students — to open up, learn, and connect around mental health challenges. These talks help normalize conversations around emotions, trauma, and healing.
              </p>
              <p className="text-base leading-relaxed" style={{color: 'var(--charcoal-black)'}}>
                ✨ We recently hosted a successful Safe Space Talk in collaboration with My Afya Profile, reaching dozens of youth with meaningful conversations, support, and mental health education.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 flex items-center justify-center">
                <img 
                  src="/assets/safeSpace.svg" 
                  alt="Safe Space Talks illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Trainings */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--deep-red)'}}>2. Corporate Trainings</h3>
              <p className="text-base leading-relaxed" style={{color: 'var(--charcoal-black)'}}>
                We partner with organizations and companies to provide mental health and wellness training for staff and management. These sessions address workplace stress, burnout, emotional intelligence, and resilience — boosting both productivity and well-being in the workplace.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 flex items-center justify-center">
                <img 
                  src="/assets/corporateTraining.svg" 
                  alt="Corporate Training illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Online Mental Health Awareness Sessions */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--deep-red)'}}>3. Online Mental Health Awareness Sessions</h3>
              <p className="text-base leading-relaxed" style={{color: 'var(--charcoal-black)'}}>
                Through live streams, webinars, and virtual workshops, we reach wide audiences with educational content on topics such as depression, anxiety, self-care, and coping strategies. These online sessions are designed to make mental health knowledge accessible to all, regardless of location.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 flex items-center justify-center">
                <img 
                  src="/assets/onlineSession.svg" 
                  alt="Online Sessions illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Counseling Sessions */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--deep-red)'}}>4. Counseling Sessions</h3>
              <p className="text-base leading-relaxed" style={{color: 'var(--charcoal-black)'}}>
                We provide one-on-one and group counseling sessions with professional therapists and psychologists. These sessions offer personalized mental health support, guidance, and tools for healing and personal growth — either virtually or in person.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 flex items-center justify-center">
                <img 
                  src="/assets/counselling.svg" 
                  alt="Counseling Sessions illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo; 