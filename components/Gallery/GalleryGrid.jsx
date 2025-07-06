import React from 'react';
import GalleryCard from './GalleryCard';

const GalleryGrid = ({ photos, viewMode, onPhotoClick }) => {
  if (viewMode === 'masonry') {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {photos.map((photo) => (
          <div key={photo.id} className="break-inside-avoid mb-6">
            <GalleryCard photo={photo} onClick={() => onPhotoClick(photo)} />
          </div>
        ))}
      </div>
    );
  }

  // Grid layout
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <GalleryCard key={photo.id} photo={photo} onClick={() => onPhotoClick(photo)} />
      ))}
    </div>
  );
};

export default GalleryGrid; 