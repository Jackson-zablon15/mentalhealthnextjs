"use client";
import React, { useState } from "react";
import EventCard from "./EventCard";

const OrganizedEventList = ({ data }) => {
  const filteredEvents = (events) => {
    let upcomingEvents = [];
    let previousEvents = [];

    events &&
      events.forEach((event, index) => {
        const eventDate = new Date(event.fields.date);
        const currentDate = new Date();

        if (eventDate >= currentDate) {
          upcomingEvents.push(event);
        } else {
          previousEvents.push(event);
        }
      });
    return { upcomingEvents, previousEvents };
  };

  const { upcomingEvents, previousEvents } = filteredEvents(data);

  console.log("Filtered Events:", filteredEvents(data));

  const EventSection = ({ title, events, emptyMessage, showCount = true }) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "var(--deep-red)" }}
        >
          {title}
        </h2>
        {showCount && events && events.length > 0 && (
          <p className="text-sm text-gray-500">
            {events.length} event{events.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {events && events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => {
            return <EventCard key={index} event={event} />;
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📅</div>
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: "var(--charcoal-black)" }}
          >
            {emptyMessage}
          </h3>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-16" style={{ background: "var(--soft-white)" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--deep-red)" }}
          >
            Our Events Calendar
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ color: "var(--charcoal-black)" }}
          >
            Discover our comprehensive calendar of mental health events,
            workshops, and awareness campaigns.
          </p>
        </div>

        {/* Upcoming Events Section */}
        <EventSection
          title="Upcoming Events"
          events={upcomingEvents}
          emptyMessage="No upcoming events scheduled"
        />

        {/* Previous Events Section */}
        <EventSection
          title="Previous Events"
          events={previousEvents}
          emptyMessage="No previous events to display"
        />

        {/* Total Event Count */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Total events:{" "}
            <span className="text-red-700">{data && data.length}</span> |
            Upcoming:{" "}
            <span className="text-red-700">{upcomingEvents.length}</span> |
            Previous:{" "}
            <span className="text-red-700">{previousEvents.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrganizedEventList;
