"use client";
import React, { useState } from "react";
import moment from "moment";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";


const GalleryCard = ({ data, onClick }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-2xl font-bold text-center my-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-xl font-semibold my-3">{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-base leading-relaxed my-2">{children}</p>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file } = node.data.target.fields;
        const imageUrl = file?.url?.startsWith("//")
          ? "https:" + file.url
          : file.url;

        return (
          <img
            src={imageUrl}
            alt={title || "Embedded asset"}
            className="my-4 mx-auto max-w-full rounded"
          />
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      ),
    },
  };

  const getCategoryColor = (category) => {
    const categoryColors = {
      AWARENESS: "bg-blue-100 text-blue-800",
      CAMPAIGN: "bg-green-100 text-green-800",
      "SPORTS AND GAMES": "bg-yellow-100 text-yellow-800",
      "PTSD AWARENESS": "bg-purple-100 text-purple-800",
      "PHYSICAL MEETING": "bg-orange-100 text-orange-800",
      "ONLINE MEETING": "bg-indigo-100 text-indigo-800",
      SCREENING: "bg-red-100 text-red-800",
      "AWARENESS DAY": "bg-pink-100 text-pink-800",
      OUTREACH: "bg-teal-100 text-teal-800",
    };
    return categoryColors[category] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col w-[320px] "
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 flex items-center justify-center  ">
        {imageLoading && (
          <div className="w-full h-40 flex items-center justify-center">
            <div
              className="animate-spin rounded-full h-8 w-8 border-b-2"
              style={{ borderColor: "var(--deep-red)" }}
            ></div>
          </div>
        )}
        <div className="h-[250px] w-[320px] ">
          <img
            src={data.fields.photo.fields.file.url} 
            alt={"photo"}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              imageLoading ? "hidden" : "block"
            }`}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
          />
        </div>
        {imageError && (
          <div className="w-full h-40 flex items-center justify-center bg-gray-200">
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <p className="text-sm text-gray-500">Image not available</p>
            </div>
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-2 left-2 px-1 py-1 rounded-full text-xs font-bold text-white ">
          {data.fields.category}
        </div>
        {/* View Icon */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-4 h-4"
            style={{ color: "var(--deep-red)" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* Date */}
        <div className="flex items-center gap-2 mb-2">
          <svg
            className="w-4 h-4"
            style={{ color: "var(--deep-red)" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <span
            className="text-sm font-medium"
            style={{ color: "var(--grayish-blue)" }}
          >
            {formatDate(data.fields.date)}
          </span>
        </div>
        {/* Title */}
        <h3
          className="text-lg font-bold mb-2 line-clamp-2"
          style={{ color: "var(--charcoal-black)" }}
        >
          {data.fields.title}
        </h3>
        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <svg
            className="w-4 h-4"
            style={{ color: "var(--grayish-blue)" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <span className="text-sm" style={{ color: "var(--grayish-blue)" }}>
            {data.fields.location}
          </span>
        </div>
        {/* Description */}
        <div
          className="text-sm text-gray-600 line-clamp-3 leading-relaxed"
          style={{ color: "var(--charcoal-black)" }}
        >
          {documentToReactComponents(data.fields.description, options)}
        </div>
        {/* Tags */}
      </div>
    </div>
  );
};

export default GalleryCard;
