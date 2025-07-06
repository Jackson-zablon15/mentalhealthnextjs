import React from 'react';

const OrganizationDescription = () => {
  return (
    <section className="py-10" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--deep-red)'}}>
              Mental Health Africa
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{color: 'var(--charcoal-black)'}}>
              Mental Health Africa is a registered non-governmental organization founded in 2024, 
              committed to raising mental health awareness, reducing stigma, and supporting 
              individuals with mental health challenges across the continent. We believe that 
              <em className="font-semibold"> there is no health without mental health</em>, 
              and we work tirelessly to champion sustainable development goals while creating 
              a more compassionate and understanding society.
            </p>
            <p className="text-lg leading-relaxed" style={{color: 'var(--charcoal-black)'}}>
              Through our comprehensive programs, community outreach, and educational initiatives, 
              we strive to break down barriers, provide essential resources, and foster environments 
              where mental well-being is prioritized and nurtured for all individuals.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src={'/assets/aboutUs.jpg'} 
              alt="Mental Health Africa Team" 
              className="w-full max-w-md h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationDescription; 