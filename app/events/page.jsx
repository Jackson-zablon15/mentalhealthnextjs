import React from "react";
import EventPageHeader from "../../components/Events/EventPageHeader";
import OrganizedEventList from "../../components/Events/OrganizedEventList";
import CallToActionSection from "../../components/Events/CallToActionSection";

const Events = () => {
  return (
    <>
      <EventPageHeader />
      <OrganizedEventList />
      <CallToActionSection />
    </>
  );
};

export default Events;
