import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import AboutSection from './AboutSection';

const VisionMission = () => {
  return (
    <AboutSection bgColor="bg-white" title="Mission & Vision" subtitle="Strategic Goal">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Mission */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-blue-900 text-4xl font-black mb-8 relative pb-4 flex items-center">
            Our Mission
            <div className="ml-4 h-1.5 w-24 bg-yellow-500 rounded-full" />
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg md:text-xl mb-10 font-medium italic">
            "To provide an environment that encourages every child to learn, grow, and become a responsible citizen."
          </p>
          <ul className="space-y-6">
            {[
              "High-quality academic curriculum integrated with technology.",
              "Fostering moral values and cultural heritage.",
              "Providing safe and modern infrastructure for all students."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-5 text-gray-700 group">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-white text-[10px] flex-shrink-0 group-hover:scale-125 transition-transform duration-500">
                   <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                </div>
                <span className="text-lg font-bold group-hover:text-blue-900 transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Vision */}
        <div className="lg:w-1/2 bg-[#001e4a] text-white p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-blue-900/40">
          <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="relative z-10">
            <span className="text-yellow-500 font-bold uppercase text-xs tracking-[0.2em] mb-4 block">Our Vision</span>
            <h2 className="text-yellow-500 text-2xl font-black mb-6 leading-snug">
              To be the premier educational institution in Bihar, nurturing young minds to excel in every sphere of life, while remaining rooted in the values of compassion and integrity.
            </h2>
            <div className="h-1 w-16 bg-yellow-500/40 rounded-full mb-8" />
            <div className="flex flex-col gap-1">
              <p className="font-black text-yellow-500 uppercase tracking-[0.4em] text-xs">The Excellence Pledge</p>
              <p className="text-blue-200 text-sm font-bold tracking-tight">Every student matters. Every dream counts.</p>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default VisionMission;
