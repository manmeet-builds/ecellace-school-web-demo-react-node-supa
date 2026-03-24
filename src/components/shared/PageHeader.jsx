import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, bgImage }) => {
  return (
    <div className="flex flex-col">
      {/* Visual Header / Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />
          <img 
            src={bgImage || "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2000"} 
            alt="School Banner" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>
      </div>

      {/* Title & Breadcrumbs Section */}
      <div className="bg-white border-b border-slate-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-4xl mx-auto text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">{title}</h1>
            <div className="flex items-center space-x-2 text-sm text-slate-400 font-medium">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span className="text-slate-300">/</span>
              <span className="text-blue-600 font-bold">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
