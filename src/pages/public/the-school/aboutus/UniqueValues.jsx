import React from 'react';
import AboutSection from './AboutSection';

const UniqueValues = () => {
  const points = [
    "Personalized attention with a low student-teacher ratio to ensure no child is left behind.",
    "Integrated STEAM-based curriculum that prepares students for the challenges of the 21st century.",
    "State-of-the-art sports complex and dedicated coaches for holistic physical development.",
    "Strong emphasis on value-based education and cultural awareness through regular workshops.",
    "Smart classrooms and digital learning resources provided for every grade level.",
    "Strong focus on spoken English and communication skills from the primary level.",
    "Regular parent-teacher interactive sessions to track comprehensive child development.",
    "Safe transportation facility with GPS tracking for student security and peace of mind.",
    "Experienced and highly qualified faculty dedicated to mentoring rather than just teaching.",
    "Focus on co-curricular activities like music, dance, and arts to nurture hidden talents."
  ];

  return (
    <AboutSection bgColor="bg-white" title="What Makes Us Unique?">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
        <div className="space-y-6">
          {points.slice(0, 5).map((point, i) => (
            <div key={i} className={`flex items-center p-6 bg-gray-50 border-l-8 ${i % 2 === 0 ? 'border-blue-900' : 'border-yellow-500'} shadow-sm rounded-r-2xl transition-all hover:translate-x-2`}>
              <div className={`${i % 2 === 0 ? 'bg-blue-900' : 'bg-yellow-500 text-blue-900'} text-white w-10 h-10 rounded-full flex items-center justify-center font-black mr-6 flex-shrink-0 text-lg`}>
                {i + 1}
              </div>
              <p className="text-gray-700 text-lg font-medium leading-normal text-left">{point}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {points.slice(5, 10).map((point, i) => (
            <div key={i + 5} className={`flex items-center p-6 bg-gray-50 border-l-8 ${(i + 5) % 2 === 0 ? 'border-blue-900' : 'border-yellow-500'} shadow-sm rounded-r-2xl transition-all hover:translate-x-2`}>
              <div className={` ${(i + 5) % 2 === 0 ? 'bg-blue-900' : 'bg-yellow-500 text-blue-900'} text-white w-10 h-10 rounded-full flex items-center justify-center font-black mr-6 flex-shrink-0 text-lg`}>
                {i + 6}
              </div>
              <p className="text-gray-700 text-lg font-medium leading-normal text-left">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </AboutSection>
  );
};

export default UniqueValues;
