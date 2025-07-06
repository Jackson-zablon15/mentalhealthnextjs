import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import AboutUs from "../components/homepage/AboutUs";
import ProgramOverview from "../components/homepage/ProgramOverview";
import Events from "../components/homepage/Events";
import Testimonials from "../components/homepage/Testimonials";
import Newsletter from "../components/homepage/Newsletter";
import Team from "../components/homepage/Team";
import OurPartners from "../components/homepage/OurPartners";
import BlogPost from "../components/homepage/BlogPost";
import JoinUs from "../components/homepage/JoinUs";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ProgramOverview />
      <Events />
      <Testimonials />
      <Team />
      <OurPartners />
      <JoinUs />
      <Newsletter />
    </div>
  );
};

export default page;
