import React, { useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import moment from "moment";
import Link from "next/link";

const EventModal = ({ event, isOpen, onClose }) => {
  const eventDate = new Date(event.fields.date);
  const currentDate = new Date();

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getTypeColor = (type) => {
    const typeColors = {
      "ONLINE MEETING": "bg-blue-100 text-blue-800",
      OUTREACH: "bg-green-100 text-green-800",
      "AWARENESS DAY": "bg-purple-100 text-purple-800",
      "PHYSICAL MEETING": "bg-orange-100 text-orange-800",
      SCREENING: "bg-red-100 text-red-800",
      "PTSD AWARENESS": "bg-indigo-100 text-indigo-800",
      "SPORTS AND GAMES": "bg-yellow-100 text-yellow-800",
      CAMPAIGN: "bg-pink-100 text-pink-800",
      AWARENESS: "bg-teal-100 text-teal-800",
      MEETING: "bg-gray-100 text-gray-800",
    };
    return typeColors[type] || "bg-gray-100 text-gray-800";
  };

  if (!isOpen || !event) return null;

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in duration-300 slide-in-from-bottom-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:cursor-pointer transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Event Image */}
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={event.fields.photo.fields.file.url}
            alt={event.fields.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Event Type Badge */}
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white`}
          >
            {event.fields.category}
          </div>
        </div>

        {/* Event Content */}
        <div className="p-6">
          {/* Date and Time */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
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
                {moment(event.fields.date).format("D")}{" "}
                {moment(event.fields.date).format("MMMM")}{" "}
                {moment(event.fields.date).format("YYYY")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                style={{ color: "var(--deep-red)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--grayish-blue)" }}
              >
                {moment(event.fields.date).format("h:mm a")}
              </span>
            </div>
          </div>

          {/* Event Title */}
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--charcoal-black)" }}
          >
            {event.fields.title}
          </h2>

          {/* Event Description */}
          <div
            className="text-gray-600 leading-relaxed mb-6"
            style={{ color: "var(--charcoal-black)" }}
          >
            {documentToReactComponents(event.fields.description, options)}
          </div>

          {/* Additional Details Section */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "var(--deep-red)" }}
            >
              Event Details
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
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
                <span style={{ color: "var(--charcoal-black)" }}>
                  {event.fields.online ? "Online Event" : (
                    <>
                    <span>In-Person Event: </span> {event.fields.location || "Location to be communicated"}
                    </>
                  ) }
                </span>
              </div>
              <div className="flex items-center gap-2">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  ></path>
                </svg>
                <span style={{ color: "var(--charcoal-black)" }}>
                  Open to all community members
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons - Only show for current and upcoming events */}
          {!false && (
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href={`https://wa.me/${event.fields.tell}?text=Hello%2C%20I'm%20interested%20in%20this%20EVENT.`}
                target="_blank"
              >
                <button
                  className="flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                  style={{
                    borderColor: "var(--deep-red)",
                    color: "var(--deep-red)",
                    background: "transparent",
                    border: "2px solid var(--deep-red)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "var(--deep-red)";
                    e.target.style.color = "var(--soft-white)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "var(--deep-red)";
                  }}
                >
                  Contact Organizer
                </button>
              </Link>
            </div>
          )}

          {/* Previous Event Notice */}
          {eventDate < currentDate && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-blue-800 font-medium">
                  This event has already taken place
                </span>
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4
              className="text-sm font-semibold mb-3"
              style={{ color: "var(--grayish-blue)" }}
            >
              Share this event
            </h4>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <svg
                  className="w-5 h-5"
                  style={{ color: "var(--deep-red)" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <svg
                  className="w-5 h-5"
                  style={{ color: "var(--deep-red)" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <svg
                  className="w-5 h-5"
                  style={{ color: "var(--deep-red)" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
