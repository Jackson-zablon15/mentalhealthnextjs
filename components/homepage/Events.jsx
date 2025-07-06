'use client'
import React, { useState } from 'react';

const events = [
  {
    date: { day: '24', month: 'JUL', year: '2025', time: '8:00 AM' },
    type: 'SPORTS AND GAMES',
    title: 'International Self-care Day',
    subtitle: 'Move, Laugh & Connect',
    details: 'A fun-filled morning featuring team sports, mindfulness games, and laughter challenges to promote self-care through physical and emotional wellness.'
  },
  {
    date: { day: '1', month: 'AUG', year: '2025', time: '8:30 AM' },
    type: 'OUTREACH',
    title: 'Suicide Prevention Month',
    subtitle: 'Hope Beyond the Silence',
    details: 'Our team will visit schools, markets, and local hubs to distribute materials, provide on-spot counseling, and encourage open conversations about mental health and suicide prevention.'
  },
  {
    date: { day: '10', month: 'SEP', year: '2025', time: '8:00 AM' },
    type: 'POSTERS',
    title: 'World Suicide Prevention Day',
    subtitle: 'Voices That Matter',
    details: 'A poster campaign across schools and public spaces featuring real stories, bold messages, and actionable steps to support those struggling with suicidal thoughts.'
  },
  {
    date: { day: '5', month: 'OCT', year: '2025', time: '8:00 AM' },
    type: 'PRISONER VISIT',
    title: 'National Depression Screening Day',
    subtitle: 'Restoring Dignity and Hope',
    details: 'A dedicated outreach at correctional facilities to offer free depression screening, counseling, and support materials to inmates, aiming to promote healing and mental resilience.'
  },
  {
    date: { day: '6', month: 'OCT', year: '2025', time: '8:00 AM' },
    type: 'POSTERS',
    title: 'Mental Illness Awareness Day',
    subtitle: 'Awareness Starts with You',
    details: 'A powerful poster installation campaign that highlights common mental illnesses, debunks myths, and shares contact info for free community mental health resources.'
  },
];


const Events = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const handleToggle = idx => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section id="events" className="py-16" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{color: 'var(--deep-red)'}}>Upcoming Events</h2>
        <div className="flex flex-col gap-6 mb-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`flex flex-col bg-white rounded-lg shadow p-4 md:p-6 gap-4 border border-gray-100 cursor-pointer transition-all duration-300 ${openIdx === idx ? 'ring-2 ring-[var(--deep-red)]' : ''}`}
              onClick={() => handleToggle(idx)}
            >
              <div className="flex items-center gap-4 w-full">
                <div className="flex flex-col items-center justify-center bg-[#f3f4f6] rounded p-2 w-16 min-w-16">
                  <span className="text-lg font-bold" style={{color: 'var(--deep-red)'}}>{event.date.day}</span>
                  <span className="text-xs uppercase font-semibold" style={{color: 'var(--grayish-blue)'}}>{event.date.month}</span>
                  <span className="text-xs" style={{color: '#888'}}>{event.date.year}</span>
                  <span className="text-xs mt-1" style={{color: '#222'}}>{event.date.time}</span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="uppercase text-xs font-semibold mb-1" style={{color: 'var(--grayish-blue)'}}>{event.type}</span>
                  <span className="font-bold text-base md:text-lg mb-1" style={{color: '#222'}}>{event.title}</span>
                  <span className="text-xs md:text-sm" style={{color: '#666'}}>{event.subtitle}</span>
                </div>
                <div className="ml-auto">
                  <svg className={`w-6 h-6 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
              {openIdx === idx && (
                <div className="mt-4 text-gray-700 border-t pt-4 text-sm">
                  {event.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
