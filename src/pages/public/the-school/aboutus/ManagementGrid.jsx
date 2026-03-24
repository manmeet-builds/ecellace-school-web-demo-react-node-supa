import React from 'react';
import { getAssetUrl } from '../../../../services/supabase';
import AboutSection from './AboutSection';

const ManagementGrid = () => {
  const leaders = [
    {
      name: "Smt. Anjali Sharma",
      role: "Principal",
      image: getAssetUrl('/team/teacher-2.jpg', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000'),
      desc: "Ensuring academic excellence and discipline through innovative teaching methodologies."
    },
    {
      name: "Sri Rajesh Kumar",
      role: "Secretary",
      image: getAssetUrl('/team/teacher-1.jpg', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000'),
      desc: "Leading the administrative vision and infrastructure development of the campus."
    },
    {
      name: "Sri Alok Kumar",
      role: "Managing Director",
      image: getAssetUrl('/team/teacher-3.jpg', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000'),
      desc: "Strategizing the future growth and global integration of our curriculum."
    }
  ];

  return (
    <AboutSection bgColor="bg-gray-100" title="Our Leadership Team" subtitle="Management">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {leaders.map((leader, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-4 overflow-hidden flex flex-col">
            {/* Square Image */}
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Card Info */}
            <div className="p-6 flex flex-col flex-1">
              <h4 className="text-xl font-black text-blue-900 uppercase tracking-tighter mb-1">{leader.name}</h4>
              <p className="text-yellow-600 text-[10px] font-black tracking-[0.3em] uppercase mb-4 pb-4 border-b border-gray-100">{leader.role}</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium italic">
                "{leader.desc}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </AboutSection>
  );
};

export default ManagementGrid;
