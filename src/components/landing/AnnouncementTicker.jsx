import React from 'react';
import { Megaphone } from 'lucide-react';

const AnnouncementTicker = () => {
  const announcements = [
    "Admissions Open for Academic Year 2025-26 - Apply Now!",
    "Annual Sports Meet scheduled for 15th November 2024.",
    "Excellence International School wins Inter-School Science Quiz.",
    "Parent-Teacher Meeting (PTM) this Saturday from 9:00 AM.",
    "New Robotics Lab now open for Middle & High School students."
  ];

  return (
    <div className="bg-yellow-400 py-3 relative z-40 flex items-center shadow-inner overflow-hidden border-y border-yellow-500/30">
      <div className="container mx-auto px-4 md:px-12 flex items-center">
        {/* Label */}
        <div className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mr-6 whitespace-nowrap z-10 shadow-lg">
          <Megaphone className="w-3.5 h-3.5" />
          <span>Latest Updates</span>
        </div>

        {/* Ticker Container */}
        <div className="flex-1 overflow-hidden pointer-events-none">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12">
            {announcements.map((text, i) => (
              <span key={i} className="text-blue-900 font-bold text-sm md:text-base tracking-tight">
                {text}
              </span>
            ))}
            {/* Duplicate for infinite loop */}
            {announcements.map((text, i) => (
              <span key={`dup-${i}`} className="text-blue-900 font-bold text-sm md:text-base tracking-tight">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementTicker;
