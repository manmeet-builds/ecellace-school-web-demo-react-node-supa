import React from 'react';
import { Award } from 'lucide-react';
import { getAssetUrl } from '../../../../services/supabase';
import AboutSection from './AboutSection';

const FounderSection = () => {
  const founderImg = getAssetUrl('team/principal.jpg', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800');

  return (
    <AboutSection bgColor="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Founder Image */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src={founderImg}
                alt="Sri Mathura Kumar"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Decorative Pulse */}
            <div className="absolute inset-0 rounded-full bg-blue-100 -z-10 animate-ping opacity-20" />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="lg:col-span-8 text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6">
            Our Foundation
          </div>
          <h2 className="text-blue-900 text-4xl md:text-5xl font-black mb-6 leading-tight">
            The Visionary <br /><span className="text-yellow-500">Behind Excellence</span>
          </h2>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 italic">Sri Mathura Kumar, Founder</h3>
          <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
            <p>
              Founded in 1991, Excellence Public School has a rich history of providing quality education. Our founder, Sri Mathura Kumar, envisioned an institution where students from all walks of life could receive world-class education with traditional values.
            </p>
            <p>
              His dedication transformed a modest beginning into one of the most respected educational organizations in Bhagalpur. We continue to walk the path he blazed, prioritizing discipline, academic rigor, and character building.
            </p>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default FounderSection;
