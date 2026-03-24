import React, { useRef } from 'react';
import { Megaphone, Calendar, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { getAssetUrl } from '../../services/supabase';

const Announcements = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const announcements = [
    {
      title: "Admissions Open 2025-26",
      date: "Oct 24, 2024",
      category: "Admission",
      desc: "Enrollment for the upcoming academic session is now open. Secure your child's future today.",
    },
    {
      title: "Annual Sports Meet",
      date: "Nov 15, 2024",
      category: "Sports",
      desc: "Get ready for a week of athletic excellence and team spirit. Stay tuned for the schedule.",
    },
    {
      title: "Science Quiz Winners",
      date: "Sep 30, 2024",
      category: "Academic",
      desc: "EIS wins the Inter-School Science Quiz Competition! Congratulations to our brilliant team.",
    },
    {
      title: "Robotics Workshop",
      date: "Dec 05, 2024",
      category: "Workshop",
      desc: "Hands-on robotics session for Grade 6-12 students. Register at the lab office.",
    }
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest mb-4">
              <Megaphone className="w-4 h-4 mr-2" />
              Announcements
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#001e4a] leading-tight">
              Stay Updated <br/><span className="text-blue-600">Latest News</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-2xl bg-[#001e4a] flex items-center justify-center text-white hover:bg-blue-900 transition-all shadow-lg shadow-blue-200 active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Card Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar scroll-smooth"
        >
          {announcements.map((item, i) => (
            <div 
              key={i} 
              className="min-w-[300px] md:min-w-[380px] bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 snap-center group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600/30 group-hover:bg-blue-600 group-hover:w-2.5 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-blue-50 px-3 py-1 rounded-lg text-[10px] font-bold text-blue-700 border border-blue-100 uppercase tracking-widest">
                    {item.category}
                  </div>
                  <div className="flex items-center text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                    {item.date}
                  </div>
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-[#001e4a] mb-4 group-hover:text-blue-600 transition-colors leading-tight text-left">
                  {item.title}
                </h4>
                
                <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed text-base font-medium italic text-left">
                  "{item.desc}"
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <button className="flex items-center text-[#001e4a] font-extrabold group/btn hover:text-blue-600 transition-colors">
                  Read More 
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1.5" />
                </button>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-45 transition-all duration-500">
                   <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Announcements;
