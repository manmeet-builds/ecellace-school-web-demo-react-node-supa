import React from 'react';
import { CheckCircle } from 'lucide-react';

const AdmissionsCTA = () => {
  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 opacity-10">
        <div className="w-96 h-96 bg-white rounded-full -mr-20 -mb-20" />
      </div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="bg-white/10 border border-white/20 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between text-white backdrop-blur-sm">
          <div className="mb-10 md:mb-0 md:mr-10 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Admissions Open 2025-2026</h2>
            <p className="text-blue-100 text-lg max-w-lg mb-8">
              Join our vibrant community of learners. Limited seats available for Pre-Primary to Grade XII.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {['Interactive Learning', 'Sports Academy', 'Scholarship Programs', 'Safe Transport'].map((item, i) => (
                <li key={i} className="flex items-center space-x-2 text-sm text-blue-50">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4 w-full md:w-auto">
            <button className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 whitespace-nowrap">
              Register Interest Now
            </button>
            <button className="text-white border border-white/30 px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;
