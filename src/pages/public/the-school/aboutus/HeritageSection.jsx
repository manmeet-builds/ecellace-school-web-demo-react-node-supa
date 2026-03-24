import React from 'react';
import { getAssetUrl } from '../../../../services/supabase';
import AboutSection from './AboutSection';

const HeritageSection = () => {
  const heritageImg = getAssetUrl('/school/excellance-school-student.jpg', 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200');

  return (
    <AboutSection bgColor="bg-blue-50" title="Founder's Heritage" subtitle="Legacy">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 text-left relative z-10">
          <h2 className="text-[#001e4a] text-4xl md:text-5xl font-black mb-10 leading-tight">
            Excellence & Its <br /><span className="text-blue-600">Rich Heritage</span>
          </h2>
          <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed font-bold border-l-8 border-yellow-500 pl-10 py-4">
            <p>
              Excellence Public School (DHSBGP) is situated in the heart of Bhagalpur, Bihar. For decades, we have served as a beacon of hope and education for the community.
            </p>
            <p className="text-gray-500 font-medium italic">
              "Our alumni network spans the globe, with graduates excelling in medicine, engineering, civil services, and the arts. This legacy is a testament to the Quality Education we have promised."
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 relative group">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-400 rounded-[3rem] -z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-1000 opacity-20" />
          <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,30,74,0.4)] border-8 border-white">
            <img
              src={heritageImg}
              alt="School Heritage"
              className="w-full h-[500px] object-cover transition-transform duration-[3000ms] group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-900 rounded-[3rem] -z-10 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-1000 opacity-20" />

          {/* Floating Badge */}
          <div className="absolute top-10 right-10 bg-white p-6 rounded-[2rem] shadow-2xl group-hover:translate-x-4 transition-transform duration-700">
            <div className="text-4xl font-black text-blue-900">25+</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-yellow-600">Years of Glory</div>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default HeritageSection;
