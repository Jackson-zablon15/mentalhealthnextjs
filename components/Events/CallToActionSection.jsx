"use client";
import React, { useState } from "react";
import { eventsData } from "../../data/eventsData";
import EventModal from "./EventModal";
import Link from "next/link";

const CallToActionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Helper function to convert date to sortable format
  const getDateValue = (event) => {
    const monthMap = {
      JAN: 1,
      FEB: 2,
      MAR: 3,
      APR: 4,
      MAY: 5,
      JUN: 6,
      JUL: 7,
      AUG: 8,
      SEP: 9,
      OCT: 10,
      NOV: 11,
      DEC: 12,
    };
    return new Date(
      parseInt(event.date.year),
      monthMap[event.date.month] - 1,
      parseInt(event.date.day)
    );
  };

  // Get current or next upcoming event
  const getCurrentOrNextEvent = () => {
    const currentDate = new Date();

    // First, try to find a current event (within 7 days)
    const currentEvent = eventsData.find((event) => {
      const eventDate = getDateValue(event);
      const daysDiff = Math.floor(
        (eventDate - currentDate) / (1000 * 60 * 60 * 24)
      );
      return daysDiff >= -7 && daysDiff <= 7;
    });

    if (currentEvent) {
      return currentEvent;
    }

    // If no current event, find the next upcoming event
    const upcomingEvents = eventsData.filter((event) => {
      const eventDate = getDateValue(event);
      return eventDate > currentDate;
    });

    if (upcomingEvents.length > 0) {
      // Sort by date and return the earliest upcoming event
      upcomingEvents.sort((a, b) => getDateValue(a) - getDateValue(b));
      return upcomingEvents[0];
    }

    return null;
  };

  const handleJoinProgram = () => {
    const event = getCurrentOrNextEvent();
    if (event) {
      setSelectedEvent(event);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const currentOrNextEvent = getCurrentOrNextEvent();

  return (
    <>
      <section className="py-16" style={{ background: "var(--midnight-navy)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            {/* Main CTA */}
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "var(--soft-white)" }}
            >
              Want to attend, volunteer or sponsor an event?
            </h2>

            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: "var(--soft-white)" }}
            >
              Join our community of mental health advocates and make a
              difference in the lives of people across Africa.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleJoinProgram}
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
                style={{
                  background: "var(--deep-red)",
                  color: "var(--soft-white)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "1";
                }}
              >
                {currentOrNextEvent
                  ? "Join Our Next Program"
                  : "View All Events"}
              </button>

              <Link href="/contacts">
                <button
                  className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border-2 hover:scale-105"
                  style={{
                    borderColor: "var(--deep-red)",
                    color: "var(--soft-white)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "var(--deep-red)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                  }}
                >
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--charcoal-black)" }}
                >
                  Attend Events
                </h3>
                <p className="text-gray-600 text-sm">
                  Join our workshops, awareness campaigns, and community
                  outreach programs.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--charcoal-black)" }}
                >
                  Volunteer
                </h3>
                <p className="text-gray-600 text-sm">
                  Share your skills and time to support mental health
                  initiatives in your community.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">💝</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--charcoal-black)" }}
                >
                  Sponsor
                </h3>
                <p className="text-gray-600 text-sm">
                  Support our programs through donations and help us reach more
                  communities.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-600">
              <p
                className="text-sm mb-4"
                style={{ color: "var(--soft-white)" }}
              >
                Have questions about our events?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <div className="flex items-center gap-2">
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span style={{ color: "var(--soft-white)" }}>
                    mentalhealthafrica@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span style={{ color: "var(--soft-white)" }}>
                    +255 624 454 589
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default CallToActionSection;
