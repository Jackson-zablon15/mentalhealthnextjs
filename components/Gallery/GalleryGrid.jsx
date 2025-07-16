import React from 'react';
import GalleryCard from './GalleryCard';

const GalleryGrid = ({ data, viewMode, onPhotoClick }) => {
  if (viewMode === 'masonry') {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 mx-auto">
        { data && data.map((item, index) => (
          <div key={index} className="break-inside-avoid mb-6">
            <GalleryCard data={item} onClick={() => onPhotoClick(photo)} />
          </div>
        ))}
      </div>
    );
  }

  // Grid layout
  return (
    <div className="flex flex-wrap items-start gap-4 justify-center">
      {data && data.map((item, index) => (
        <GalleryCard key={index} data={item} onClick={() => onPhotoClick(photo)} />
      ))}
    </div>
  );
};

export default GalleryGrid; 