import React from "react";

// About Us specific components
import IntroSection from "../../components/aboutus/IntroSection";
import OrganizationDescription from "../../components/aboutus/OrganizationDescription";
import MissionVision from "../../components/aboutus/MissionVision";

// Shared components from homepage
import ProgramOverview from "../../components/homepage/ProgramOverview";
import Team from "../../components/homepage/Team";
import JoinUs from "../../components/homepage/JoinUs";

const About = () => {
  return (
    <>
      <IntroSection />
      <OrganizationDescription />
      <MissionVision />
      <ProgramOverview />
      <Team />
      <JoinUs />
    </>
  );
};

export default About;
