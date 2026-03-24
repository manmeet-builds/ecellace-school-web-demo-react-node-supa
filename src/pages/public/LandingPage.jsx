import React from 'react';
import Hero from '../../components/landing/Hero';
import AnnouncementTicker from '../../components/landing/AnnouncementTicker';
import QuickStats from '../../components/landing/QuickStats';
import WhyChooseUs from '../../components/landing/WhyChooseUs';
import PrincipalMessage from '../../components/landing/PrincipalMessage';
import AdmissionsCTA from '../../components/landing/AdmissionsCTA';
import LeadingSchool from '../../components/landing/LeadingSchool';
import NewsEvents from '../../components/landing/NewsEvents';
import Facilities from '../../components/landing/Facilities';
import Announcements from '../../components/landing/Announcements';

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <AnnouncementTicker />
      <Hero />
      <Announcements />
      <QuickStats />
      <WhyChooseUs />
      <PrincipalMessage />
      <AdmissionsCTA />
      <LeadingSchool />
      <NewsEvents />
      <Facilities />
    </div>
  );
};

export default LandingPage;
