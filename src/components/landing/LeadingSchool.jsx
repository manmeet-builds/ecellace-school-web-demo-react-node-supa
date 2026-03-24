import React from 'react';
import { getAssetUrl } from '../../services/supabase';

const LeadingSchool = () => {
  const classroomImg = getAssetUrl('school/classroom.jpg', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200');
  const studentImg = getAssetUrl('school/excellance-school-student.jpg', 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=1200');

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 -z-10" />

      <div className="container mx-auto px-4 md:px-12 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Overlapping Images */}
          <div className="lg:w-1/2 relative group w-full max-w-xl mx-auto lg:mx-0">
            {/* Background Accent */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60 animate-pulse" />
            <div className="absolute -bottom-20 -right-10 w-48 h-48 bg-indigo-50 rounded-full blur-2xl -z-10 opacity-40" />

            {/* First Image */}
            <div className="relative z-10 w-[70%] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border-8 border-white transition-all duration-700 hover:rotate-[-2deg] hover:scale-[1.02]">
              <img
                src={classroomImg}
                alt="Classroom Activity"
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Second Image */}
            <div className="absolute top-[40%] left-[40%] z-20 w-[70%] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_-10px_rgba(0,0,0,0.25)] border-8 border-white transition-all duration-700 hover:rotate-[2deg] hover:scale-[1.02] hover:-translate-y-4">
              <img
                src={studentImg}
                alt="Student Interaction"
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:w-1/2 text-left relative">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 animate-ping" />
              <h3 className="text-blue-700 font-bold uppercase tracking-[0.2em] text-xs">Leading Excellence</h3>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#001e4a] mb-8 leading-[1.1] tracking-tight">
              A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Educational Leadership</span> in the Region
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed text-lg lg:text-xl font-medium">
              <p>
                Our institution stands as a beacon of academic rigor and holistic development, fostering an environment where curiosity meets world-class mentorship.
              </p>
              <p>
                We believe in empowering the next generation of leaders through innovative teaching methodologies, cutting-edge facilities, and a culture of growth.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-12">
              <div className="group">
                <p className="text-4xl md:text-5xl font-black text-[#001e4a] transition-colors group-hover:text-blue-600">25+</p>
                <div className="h-1.5 w-8 bg-blue-600 mt-2 mb-1 group-hover:w-16 transition-all duration-500 rounded-full" />
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years Legacy</p>
              </div>
              <div className="h-16 w-px bg-slate-200 hidden sm:block" />
              <div className="group">
                <p className="text-4xl md:text-5xl font-black text-[#001e4a] transition-colors group-hover:text-blue-600">5000+</p>
                <div className="h-1.5 w-8 bg-blue-600 mt-2 mb-1 group-hover:w-16 transition-all duration-500 rounded-full" />
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Global Alumni</p>
              </div>
            </div>

            <div className="mt-14">
              <button className="group relative px-10 py-5 bg-[#001e4a] text-white font-bold rounded-2xl overflow-hidden transition-all hover:bg-blue-900 hover:shadow-[0_20px_40px_-5px_rgba(0,30,74,0.3)] active:scale-[0.98]">
                <span className="relative z-10 flex items-center gap-3">
                  Discover Our History
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadingSchool;
