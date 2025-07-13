import React from 'react';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      content: "1234 Mind Street, Dar es Salaam",
      color: "var(--deep-red)"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      content: "+255 758 758 153",
      color: "var(--deep-red)"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      content: "mentalhealthhubafrica@gmail.com",
      color: "var(--deep-red)"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--deep-red)'}}>
            Contact Information
          </h2>
          <p className="text-lg" style={{color: 'var(--charcoal-black)'}}>
            Reach out to us through any of these channels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{background: 'var(--soft-white)'}}
            >
              <div className="flex justify-center mb-4">
                <div style={{color: item.color}}>
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--deep-red)'}}>
                {item.title}
              </h3>
              <p className="text-lg" style={{color: 'var(--charcoal-black)'}}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo; 