'use client'
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submission logic
    setEmail('');
  };

  return (
    <section className="py-16" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--deep-red)'}}>Stay Updated</h2>
        <p className="mb-6" style={{color: 'var(--grayish-blue)'}}>Subscribe to our newsletter for the latest updates and resources on mental health across Africa.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="px-4 py-2 rounded focus:outline-none flex-1"
            style={{border: '1px solid var(--grayish-blue)', color: 'var(--charcoal-black)'}}
          />
          <button type="submit" className="px-6 py-2 rounded font-medium transition" style={{background: 'var(--deep-red)', color: 'var(--soft-white)'}}>Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
