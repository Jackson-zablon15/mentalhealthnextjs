"use client";
import React, { useEffect, useState } from "react";
import EventPageHeader from "../../components/Events/EventPageHeader";
import OrganizedEventList from "../../components/Events/OrganizedEventList";
import CallToActionSection from "../../components/Events/CallToActionSection";
import { createClient } from "contentful";

const Events = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: "d4h4jy8mnviv",
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: "4sF9kJ1Y5bmXLw1zsD1d0jE4NuXPPeG2l0Z9tSuca_Q",
      });

      const response = await client.getEntries({ content_type: "events" });
      console.log(response.items);
      setPhotos(response.items);
    };
    getitems();
  }, []);

  return (
    <>
      <EventPageHeader />
      <OrganizedEventList />
      <CallToActionSection />
    </>
  );
};

export default Events;
