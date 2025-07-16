import React from "react";

// About Us specific components
import IntroSection from "../../components/aboutus/IntroSection";
import OrganizationDescription from "../../components/aboutus/OrganizationDescription";
import MissionVision from "../../components/aboutus/MissionVision";
import WhatWeDo from "../../components/aboutus/WhatWeDo";

// Shared components from homepage
import Team from "../../components/homepage/Team";
import JoinUs from "../../components/homepage/JoinUs";

const About = () => {
  return (
    <>
      <IntroSection />
      <OrganizationDescription />
      <MissionVision />
      <WhatWeDo />
      <Team />
      <JoinUs />
    </>
  );
};

export default About;
