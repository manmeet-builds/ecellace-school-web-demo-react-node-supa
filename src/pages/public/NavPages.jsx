import React from 'react';
import PageHeader from '../../components/shared/PageHeader';

const BaseShellPage = ({ title }) => {
  return (
    <div>
      <PageHeader title={title} />
      <div className="container mx-auto px-4 md:px-12 py-16 text-left">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 leading-tight">Overview of {title}</h2>
          <p className="text-slate-600 leading-relaxed text-lg italic">
            Content for this section is currently being updated. Excellence International School is committed to providing the most accurate and descriptive information for all our stakeholders.
          </p>
          <div className="p-8 border-l-4 border-blue-900 bg-blue-50/50 rounded-r-2xl">
            <p className="text-blue-900 font-medium tracking-wide">
              Please check back soon for latest information regarding {title.toLowerCase()} or contact our administration office for immediate assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Facilities = () => <BaseShellPage title="School Facilities" />;
const Staff = () => <BaseShellPage title="Teachers & Staff" />;
const Disclosure = () => <BaseShellPage title="Mandatory Disclosure" />;
const News = () => <BaseShellPage title="Latest News" />;
const Events = () => <BaseShellPage title="School Events" />;
const PhotoGallery = () => <BaseShellPage title="Photo Gallery" />;
const VideoGallery = () => <BaseShellPage title="Video Gallery" />;
const Fees = () => <BaseShellPage title="Fee Structure" />;
const Calendar = () => <BaseShellPage title="Academic Calendar" />;
const Timing = () => <BaseShellPage title="School Timing" />;
const ParentsCorner = () => <BaseShellPage title="Parents Corner" />;
const Procedure = () => <BaseShellPage title="Admission Procedure" />;
const Rules = () => <BaseShellPage title="Rules and Regulation" />;

export { 
  Facilities, Staff, Disclosure, 
  News, Events, 
  PhotoGallery, VideoGallery, 
  Fees, Calendar, Timing, ParentsCorner,
  Procedure, Rules
};
