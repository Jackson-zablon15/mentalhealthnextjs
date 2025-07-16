"use client";
import React, { useState, useMemo, useEffect } from "react";
import GalleryHeader from "../../components/Gallery/GalleryHeader";
import GalleryFilters from "../../components/Gallery/GalleryFilters";
import GalleryGrid from "../../components/Gallery/GalleryGrid";
import LightboxModal from "../../components/Gallery/LightboxModal";
import { galleryData } from "../../data/galleryData";
import { createClient } from "contentful";
import Image from "next/image";
import GalleryCard from "../../components/Gallery/GalleryCard";

const Gallery = () => {
  // State for filters and view
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // State for lightbox
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [data, setData] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: "d4h4jy8mnviv",
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: "4sF9kJ1Y5bmXLw1zsD1d0jE4NuXPPeG2l0Z9tSuca_Q",
      });

      const response = await client.getEntries({ content_type: "gallery" });
      console.log(response.items);
      setData(response.items);
    };
    getitems();
  }, []);

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
      <GalleryHeader data={data} />

      

      {/* Gallery Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4"> 
          

         <GalleryGrid data={data} />
        </div>
      </section>

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

/*

*/
