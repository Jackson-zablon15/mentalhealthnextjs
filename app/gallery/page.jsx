"use client";
import React, { useState, useMemo } from "react";
import GalleryHeader from "../../components/Gallery/GalleryHeader";
import GalleryFilters from "../../components/Gallery/GalleryFilters";
import GalleryGrid from "../../components/Gallery/GalleryGrid";
import LightboxModal from "../../components/Gallery/LightboxModal";
import GalleryCallToAction from "../../components/Gallery/GalleryCallToAction";
import { galleryData } from "../../data/galleryData";

const Gallery = () => {
  // State for filters and view
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // State for lightbox
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Filter photos based on selected criteria
  const filteredPhotos = useMemo(() => {
    return galleryData.filter((photo) => {
      // Category filter
      if (selectedCategory !== "all" && photo.category !== selectedCategory) {
        return false;
      }

      // Year filter
      if (selectedYear !== "all") {
        const photoYear = new Date(photo.date).getFullYear().toString();
        if (photoYear !== selectedYear) {
          return false;
        }
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const searchableText = [
          photo.title,
          photo.location,
          photo.description,
          ...photo.tags,
        ]
          .join(" ")
          .toLowerCase();

        if (!searchableText.includes(query)) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedYear, searchQuery]);

  // Handle photo click to open lightbox
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsLightboxOpen(true);
  };

  // Handle lightbox navigation
  const handlePrevious = () => {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );
    const previousIndex =
      currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    setSelectedPhoto(filteredPhotos[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );
    const nextIndex =
      currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--soft-white)" }}>
      {/* Header */}
      <GalleryHeader />

      {/* Filters */}
      <GalleryFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* Gallery Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Results Info */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--charcoal-black)" }}
                >
                  Gallery
                </h2>
                <p className="text-sm" style={{ color: "var(--grayish-blue)" }}>
                  Showing {filteredPhotos.length} of {galleryData.length} photos
                </p>
              </div>

              {/* View Mode Toggle for Mobile */}
              <div className="flex items-center gap-2 sm:hidden">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--grayish-blue)" }}
                >
                  View:
                </span>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-3 py-2 text-sm transition-colors duration-200 ${
                      viewMode === "grid"
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("masonry")}
                    className={`px-3 py-2 text-sm transition-colors duration-200 ${
                      viewMode === "masonry"
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3h5v5H3V3zm0 7h5v5H3v-5zm7-7h5v5h-5V3zm0 7h5v5h-5v-5zm7-7h5v5h-5V3zm0 7h5v5h-5v-5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* No Results Message */}
          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <div
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ background: "var(--grayish-blue)" }}
              >
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--charcoal-black)" }}
              >
                No photos found
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--grayish-blue)" }}
              >
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedYear("all");
                  setSearchQuery("");
                }}
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--deep-red)",
                  color: "var(--soft-white)",
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Gallery Grid */}
          {filteredPhotos.length > 0 && (
            <GalleryGrid
              photos={filteredPhotos}
              viewMode={viewMode}
              onPhotoClick={handlePhotoClick}
            />
          )}
        </div>
      </section>

      {/* Call to Action */}
      <GalleryCallToAction />

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={filteredPhotos.length > 1}
        hasNext={filteredPhotos.length > 1}
        viewMode={viewMode}
      />
    </div>
  );
};

export default Gallery;
