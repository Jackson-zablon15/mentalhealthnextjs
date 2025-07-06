'use client';
import React, { useState } from 'react';
import EventModal from './EventModal';

const EventCard = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTypeColor = (type) => {
    const typeColors = {
      'ONLINE MEETING': 'bg-blue-100 text-blue-800',
      'OUTREACH': 'bg-green-100 text-green-800',
      'AWARENESS DAY': 'bg-purple-100 text-purple-800',
      'PHYSICAL MEETING': 'bg-orange-100 text-orange-800',
      'SCREENING': 'bg-red-100 text-red-800',
      'PTSD AWARENESS': 'bg-indigo-100 text-indigo-800',
      'SPORTS AND GAMES': 'bg-yellow-100 text-yellow-800',
      'CAMPAIGN': 'bg-pink-100 text-pink-800',
      'AWARENESS': 'bg-teal-100 text-teal-800',
      'MEETING': 'bg-gray-100 text-gray-800'
    };
    return typeColors[type] || 'bg-gray-100 text-gray-800';
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer"
        onClick={handleCardClick}
      >
        {/* Event Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={'/assets/eventBackground.webp'} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Date Badge */}
          <div className="absolute top-4 left-4 bg-white rounded-lg p-3 text-center shadow-lg">
            <div className="text-2xl font-bold" style={{color: 'var(--deep-red)'}}>
              {event.date.day}
            </div>
            <div className="text-xs font-semibold uppercase" style={{color: 'var(--grayish-blue)'}}>
              {event.date.month}
            </div>
            <div className="text-xs text-gray-500">
              {event.date.year}
            </div>
          </div>

          {/* Event Type Badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
            {event.type}
          </div>
        </div>

        {/* Event Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4" style={{color: 'var(--deep-red)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-sm font-medium" style={{color: 'var(--grayish-blue)'}}>
              {event.date.time}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-3" style={{color: 'var(--charcoal-black)'}}>
            {event.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {event.description}
          </p>

          <div 
            className="w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-center"
            style={{
              background: 'var(--deep-red)',
              color: 'var(--soft-white)'
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1';
            }}
          >
            Learn More
          </div>
        </div>
      </div>

      {/* Event Modal */}
      <EventModal 
        event={event}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default EventCard; 