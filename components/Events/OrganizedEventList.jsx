'use client';
import React, { useState } from 'react';
import EventCard from './EventCard';
import { eventsData } from '../../data/eventsData';

const OrganizedEventList = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Helper function to convert date to sortable format
  const getDateValue = (event) => {
    const monthMap = {
      'JAN': 1, 'FEB': 2, 'MAR': 3, 'APR': 4, 'MAY': 5, 'JUN': 6,
      'JUL': 7, 'AUG': 8, 'SEP': 9, 'OCT': 10, 'NOV': 11, 'DEC': 12
    };
    return new Date(
      parseInt(event.date.year),
      monthMap[event.date.month] - 1,
      parseInt(event.date.day)
    );
  };

  // Get current date for comparison
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  // Categorize events
  const categorizeEvents = () => {
    const currentEvents = [];
    const upcomingEvents = [];
    const previousEvents = [];

    eventsData.forEach(event => {
      const eventDate = getDateValue(event);
      const eventYear = parseInt(event.date.year);
      const eventMonth = eventDate.getMonth() + 1;
      const eventDay = parseInt(event.date.day);

      // Check if event is current (within 7 days from today)
      const daysDiff = Math.floor((eventDate - currentDate) / (1000 * 60 * 60 * 24));
      
      if (daysDiff >= -7 && daysDiff <= 7) {
        currentEvents.push(event);
      } else if (eventDate > currentDate) {
        upcomingEvents.push(event);
      } else {
        previousEvents.push(event);
      }
    });

    // Sort events chronologically
    currentEvents.sort((a, b) => getDateValue(a) - getDateValue(b));
    upcomingEvents.sort((a, b) => getDateValue(a) - getDateValue(b));
    previousEvents.sort((a, b) => getDateValue(b) - getDateValue(a)); // Reverse for previous events

    return { currentEvents, upcomingEvents, previousEvents };
  };

  const { currentEvents, upcomingEvents, previousEvents } = categorizeEvents();

  // Get unique months and types for filtering
  const months = ['all', ...Array.from(new Set(eventsData.map(event => event.date.month)))];
  const types = ['all', ...Array.from(new Set(eventsData.map(event => event.type)))];

  // Filter events based on selected filters
  const filterEvents = (events) => {
    return events.filter(event => {
      const monthMatch = selectedMonth === 'all' || event.date.month === selectedMonth;
      const typeMatch = selectedType === 'all' || event.type === selectedType;
      return monthMatch && typeMatch;
    });
  };

  const filteredCurrentEvents = filterEvents(currentEvents);
  const filteredUpcomingEvents = filterEvents(upcomingEvents);
  const filteredPreviousEvents = filterEvents(previousEvents);

  const EventSection = ({ title, events, emptyMessage, showCount = true }) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{color: 'var(--deep-red)'}}
        >
          {title}
        </h2>
        {showCount && events.length > 0 && (
          <p className="text-sm text-gray-500">
            {events.length} event{events.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
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
            {emptyMessage}
          </h3>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-16" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{color: 'var(--deep-red)'}}
          >
            Our Events Calendar
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{color: 'var(--charcoal-black)'}}
          >
            Discover our comprehensive calendar of mental health events, workshops, and awareness campaigns.
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

        {/* Current Events Section */}
        <EventSection 
          title="Current Events" 
          events={filteredCurrentEvents}
          emptyMessage="No current events happening right now"
        />

        {/* Upcoming Events Section */}
        <EventSection 
          title="Upcoming Events" 
          events={filteredUpcomingEvents}
          emptyMessage="No upcoming events scheduled"
        />

        {/* Previous Events Section */}
        <EventSection 
          title="Previous Events" 
          events={filteredPreviousEvents}
          emptyMessage="No previous events to display"
        />

        {/* Total Event Count */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Total events: {eventsData.length} | 
            Current: {currentEvents.length} | 
            Upcoming: {upcomingEvents.length} | 
            Previous: {previousEvents.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrganizedEventList; 