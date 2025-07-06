'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-10" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--deep-red)'}}>
            Get in Touch
          </h2>
          <p className="text-lg" style={{color: 'var(--charcoal-black)'}}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{color: 'var(--charcoal-black)'}}>
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-red)] focus:border-transparent transition-colors"
                placeholder="Your full name"
                aria-label="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: 'var(--charcoal-black)'}}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-red)] focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
                aria-label="Enter your email address"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{color: 'var(--charcoal-black)'}}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-red)] focus:border-transparent transition-colors"
              placeholder="+255 123 456 789"
              aria-label="Enter your phone number"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2" style={{color: 'var(--charcoal-black)'}}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-red)] focus:border-transparent transition-colors resize-vertical"
              placeholder="Tell us how we can help you..."
              aria-label="Enter your message"
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 py-4 rounded-lg font-bold text-md bg-[var(--deep-red)] text-white shadow-lg hover:bg-[var(--grayish-blue)] transition-colors duration-200 focus:ring-2 focus:ring-[var(--deep-red)] focus:ring-offset-2"
              aria-label="Send message"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm; 