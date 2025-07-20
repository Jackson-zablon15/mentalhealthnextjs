'use client'
import React, { useState, useEffect } from 'react';
import { createClient } from "contentful";
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [openIdx, setOpenIdx] = useState(null);
  
  useEffect(() => {
    const fetchEvents = async () => {
      const client = createClient({
        space: "d4h4jy8mnviv",
        accessToken: "4sF9kJ1Y5bmXLw1zsD1d0jE4NuXPPeG2l0Z9tSuca_Q",
      });
      const response = await client.getEntries({ content_type: "events" });
      // Filter for upcoming events
      const now = new Date();
      const upcoming = response.items.filter(event => {
        const eventDate = new Date(event.fields.date);
        return eventDate >= now;
      }).sort((a, b) => new Date(a.fields.date) - new Date(b.fields.date));
      setEvents(upcoming.slice(0, 3));
    };
    fetchEvents();
  }, []);

  const handleToggle = idx => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section id="events" className="py-16" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{color: 'var(--deep-red)'}}>Upcoming Events</h2>
        <div className="flex flex-col gap-6 mb-8">
          {events.map((event, idx) => (
            <div
              key={event.sys.id}
              className={`flex flex-col bg-white rounded-lg shadow p-4 md:p-6 gap-4 border border-gray-100 cursor-pointer transition-all duration-300 ${openIdx === idx ? 'ring-2 ring-[var(--deep-red)]' : ''}`}
              onClick={() => handleToggle(idx)}
            >
              <div className="flex items-center gap-4 w-full">
                <div className="flex flex-col items-center justify-center bg-[#f3f4f6] rounded p-2 w-16 min-w-16">
                  <span className="text-lg font-bold" style={{color: 'var(--deep-red)'}}>{new Date(event.fields.date).getDate()}</span>
                  <span className="text-xs uppercase font-semibold" style={{color: 'var(--grayish-blue)'}}>{new Date(event.fields.date).toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
                  <span className="text-xs" style={{color: '#888'}}>{new Date(event.fields.date).getFullYear()}</span>
                  <span className="text-xs mt-1 block text-center" style={{color: '#222'}}>{new Date(event.fields.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="uppercase text-xs font-semibold mb-1" style={{color: 'var(--grayish-blue)'}}>{event.fields.category}</span>
                  <span className="font-bold text-base md:text-lg mb-1" style={{color: '#222'}}>{event.fields.title}</span>
                  <span className="text-xs md:text-sm" style={{color: '#666'}}>{
                    event.fields.subtitle && typeof event.fields.subtitle === 'string'
                      ? event.fields.subtitle
                      : event.fields.description && typeof event.fields.description === 'string'
                        ? event.fields.description
                        : ''
                  }</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <svg className={`w-6 h-6 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  <Link href="/events" onClick={e => e.stopPropagation()} className="ml-2 px-4 py-2 rounded font-medium text-sm transition bg-[var(--grayish-blue)] text-white hover:bg-[var(--deep-red)]">
                    Learn More
                  </Link>
                </div>
              </div>
              {openIdx === idx && (
                <div className="mt-4 text-gray-700 border-t pt-4 text-sm">
                  {event.fields.details && typeof event.fields.details === 'object' && event.fields.details.nodeType === 'document'
                    ? documentToReactComponents(event.fields.details)
                    : event.fields.details
                      ? event.fields.details
                      : event.fields.description && typeof event.fields.description === 'object' && event.fields.description.nodeType === 'document'
                        ? documentToReactComponents(event.fields.description)
                        : event.fields.description || null}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/events" className="inline-block px-6 py-2 rounded font-medium text-base transition bg-[var(--deep-red)] text-white hover:bg-[var(--grayish-blue)]">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
