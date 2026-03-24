import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { getAssetUrl } from '../../../../services/supabase';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  const heroBg = getAssetUrl('hero-bg.jpg', 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=2000');

  return (
    <section className="relative flex flex-col">
      {/* Upper Image Banner - Full Impact */}
      <div className="h-[60vh] md:h-[75vh] bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001e4a]/60 via-[#001e4a]/40 to-[#001e4a]/80 z-10" />
        <img
          src={heroBg}
          className="w-full h-full object-cover transform scale-105 animate-[slow-zoom_20s_infinite_alternate]"
          alt="Excellence Public School"
        />

      </div>

      {/* Modern Integrated Breadcrumb Bar */}
      <div className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="text-blue-900 text-2xl md:text-3xl font-black uppercase tracking-tighter">About Excellence</h2>
            <nav className="flex items-center text-gray-400 text-sm font-bold">
              <Link to="/" className="hover:text-blue-900 transition-colors flex items-center gap-2">
                <Home className="w-4 h-4" /> Home
              </Link>
              <ChevronRight className="mx-3 w-4 h-4 text-gray-300" />
              <span className="text-gray-900 underline decoration-yellow-400 decoration-4 underline-offset-8">About Us</span>
            </nav>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
