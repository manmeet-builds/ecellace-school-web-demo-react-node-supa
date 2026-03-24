import React from 'react';
import AboutHero from './aboutus/AboutHero';
import FounderSection from './aboutus/FounderSection';
import ManagementGrid from './aboutus/ManagementGrid';
import VisionMission from './aboutus/VisionMission';
import HeritageSection from './aboutus/HeritageSection';
import UniqueValues from './aboutus/UniqueValues';
import AboutCTA from './aboutus/AboutCTA';

/**
 * AboutUs Page Component
 * Re-built with a modular architecture following the Excellence School design tokens.
 */
const AboutUs = () => {
  return (
    <main className="bg-white overflow-hidden">
      <AboutHero />
      <FounderSection />
      <ManagementGrid />
      <VisionMission />
      <HeritageSection />
      <UniqueValues />
      <AboutCTA />
    </main>
  );
};

export default AboutUs;
