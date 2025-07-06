import React from 'react';
import { galleryCategories, galleryYears } from '../../data/galleryData';

const GalleryFilters = ({ 
  selectedCategory, 
  setSelectedCategory, 
  selectedYear, 
  setSelectedYear, 
  searchQuery, 
  setSearchQuery,
  viewMode,
  setViewMode 
}) => {
  return (
    <section className="py-8" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
                style={{color: 'var(--grayish-blue)'}}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search photos by event, location, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                style={{background: 'white'}}
              />
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Category and Year Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Category Filter */}
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-2" style={{color: 'var(--grayish-blue)'}}>
                  Category
                </label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  style={{background: 'white'}}
                >
                  {galleryCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-2" style={{color: 'var(--grayish-blue)'}}>
                  Year
                </label>
                <select 
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  style={{background: 'white'}}
                >
                  {galleryYears.map(year => (
                    <option key={year.id} value={year.id}>
                      {year.name} ({year.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-semibold" style={{color: 'var(--grayish-blue)'}}>
                View:
              </label>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 text-sm transition-colors duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`px-3 py-2 text-sm transition-colors duration-200 ${
                    viewMode === 'masonry' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h5v5H3V3zm0 7h5v5H3v-5zm7-7h5v5h-5V3zm0 7h5v5h-5v-5zm7-7h5v5h-5V3zm0 7h5v5h-5v-5z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== 'all' || selectedYear !== 'all' || searchQuery) && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium" style={{color: 'var(--grayish-blue)'}}>
                  Active filters:
                </span>
                {selectedCategory !== 'all' && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                    {galleryCategories.find(c => c.id === selectedCategory)?.name}
                  </span>
                )}
                {selectedYear !== 'all' && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                    {galleryYears.find(y => y.id === selectedYear)?.name}
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                    Search: "{searchQuery}"
                  </span>
                )}
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedYear('all');
                    setSearchQuery('');
                  }}
                  className="text-xs text-red-600 hover:text-red-800 underline"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryFilters; 