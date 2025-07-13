import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { eventsData } from '../../data/eventsData';
import { createClient } from "contentful";


const UpcomingEventList = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [photos, setPhotos] = useState(null);

  // Get unique months and types for filtering
  const months = ['all', ...Array.from(new Set(eventsData.map(event => event.date.month)))];
  const types = ['all', ...Array.from(new Set(eventsData.map(event => event.type)))];

  // Filter events based on selected filters
  const filteredEvents = eventsData.filter(event => {
    const monthMatch = selectedMonth === 'all' || event.date.month === selectedMonth;
    const typeMatch = selectedType === 'all' || event.type === selectedType;
    return monthMatch && typeMatch;
  });

  return (
    <section className="py-16" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{color: 'var(--deep-red)'}}
          >
            Upcoming Events
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{color: 'var(--charcoal-black)'}}
          >
            Discover our comprehensive calendar of mental health events, workshops, and awareness campaigns throughout 2025.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          {/* Month Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-semibold" style={{color: 'var(--grayish-blue)'}}>
              Month:
            </label>
            <select 
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              style={{background: 'white'}}
            >
              {months.map(month => (
                <option key={month} value={month}>
                  {month === 'all' ? 'All Months' : month}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-semibold" style={{color: 'var(--grayish-blue)'}}>
              Type:
            </label>
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              style={{background: 'white'}}
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} /> 
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📅</div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{color: 'var(--charcoal-black)'}}
            >
              No events found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters to see more events.
            </p>
          </div>
        )}

        {/* Event Count */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Showing {filteredEvents.length} of {eventsData.length} events
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventList; 