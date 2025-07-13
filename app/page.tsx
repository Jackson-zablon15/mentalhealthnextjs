import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import AboutUs from "../components/homepage/AboutUs";
import ProgramOverview from "../components/homepage/ProgramOverview";
import Events from "../components/homepage/Events";
import Testimonials from "../components/homepage/Testimonials";
import Newsletter from "../components/homepage/Newsletter";
import Team from "../components/homepage/Team";
import OurPartners from "../components/homepage/OurPartners";
import JoinUs from "../components/homepage/JoinUs";
import BookingSection from "../components/homepage/BookingSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <BookingSection />
      <ProgramOverview />
      <Events />
      <Testimonials />
      <Team />
      <OurPartners />
      <JoinUs />
    </div>
  );
};

export default page;
