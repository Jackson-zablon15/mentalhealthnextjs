'use client'
import React, { useState } from 'react';
import { eventsData } from '../../data/eventsData';
import Link from 'next/link';

const getUpcomingEvents = () => {
  const now = new Date();
  // Convert event date to JS Date and filter for upcoming
  return eventsData
    .filter(event => {
      const eventDate = new Date(`${event.date.year}-${event.date.month}-01T${event.date.time}`);
      // Use month string to month number
      const monthMap = {
        JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
      };
      eventDate.setMonth(monthMap[event.date.month]);
      eventDate.setDate(Number(event.date.day));
      return eventDate >= now;
    })
    .sort((a, b) => {
      // Sort by date ascending
      const monthMap = {
        JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
      };
      const dateA = new Date(`${a.date.year}-${a.date.month}-01T${a.date.time}`);
      dateA.setMonth(monthMap[a.date.month]);
      dateA.setDate(Number(a.date.day));
      const dateB = new Date(`${b.date.year}-${b.date.month}-01T${b.date.time}`);
      dateB.setMonth(monthMap[b.date.month]);
      dateB.setDate(Number(b.date.day));
      return dateA - dateB;
    })
    .slice(0, 5);
};

const Events = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const events = getUpcomingEvents();
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
                  <span className="text-xs md:text-sm" style={{color: '#666'}}>{event.subtitle || event.description}</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <svg className={`w-6 h-6 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  <Link href="/events" passHref legacyBehavior>
                    <a
                      className="ml-2 px-4 py-2 rounded font-medium text-sm transition bg-[var(--grayish-blue)] text-white hover:bg-[var(--deep-red)]"
                      onClick={e => e.stopPropagation()}
                    >
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
              {openIdx === idx && (
                <div className="mt-4 text-gray-700 border-t pt-4 text-sm">
                  {event.details || event.description}
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
