import React from 'react';
import galleryDemo from '../../assets/heroImage1.jpg';

const GalleryCard = ({ photo, onClick }) => {
  const getCategoryColor = (category) => {
    const categoryColors = {
      'AWARENESS': 'bg-blue-100 text-blue-800',
      'CAMPAIGN': 'bg-green-100 text-green-800',
      'SPORTS AND GAMES': 'bg-yellow-100 text-yellow-800',
      'PTSD AWARENESS': 'bg-purple-100 text-purple-800',
      'PHYSICAL MEETING': 'bg-orange-100 text-orange-800',
      'ONLINE MEETING': 'bg-indigo-100 text-indigo-800',
      'SCREENING': 'bg-red-100 text-red-800',
      'AWARENESS DAY': 'bg-pink-100 text-pink-800',
      'OUTREACH': 'bg-teal-100 text-teal-800'
    };
    return categoryColors[category] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div 
          className="w-full h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${galleryDemo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(photo.category)}`}>
          {photo.category}
        </div>
        
        {/* View Icon */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-4 h-4" style={{color: 'var(--deep-red)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Date */}
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4" style={{color: 'var(--deep-red)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span className="text-sm font-medium" style={{color: 'var(--grayish-blue)'}}>
            {formatDate(photo.date)}
          </span>
        </div>

        {/* Title */}
        <h3 
          className="text-lg font-bold mb-2 line-clamp-2"
          style={{color: 'var(--charcoal-black)'}}
        >
          {photo.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4" style={{color: 'var(--grayish-blue)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span className="text-sm" style={{color: 'var(--grayish-blue)'}}>
            {photo.location}
          </span>
        </div>

        {/* Description */}
        <p 
          className="text-sm text-gray-600 line-clamp-3 leading-relaxed"
          style={{color: 'var(--charcoal-black)'}}
        >
          {photo.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {photo.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {photo.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{photo.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard; 