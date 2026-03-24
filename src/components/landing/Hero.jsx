import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../services/supabase';

const Hero = () => {
  const heroBg = getAssetUrl('hero-bg.jpg', 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=2000');
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
        <img 
          src={heroBg} 
          alt="School Environment" 
          className="w-full h-full object-cover transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-12 py-24 md:py-40 flex flex-col items-start text-white max-w-4xl">
        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-yellow-400 text-blue-900 font-bold text-xs uppercase tracking-widest animate-bounce">
          Now Enrolling for 2025-26
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1] drop-shadow-lg">
          Empowering the Next Generation of Global Leaders
        </h2>
        <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl opacity-95 leading-relaxed drop-shadow">
          At Excellence International School, we combine academic rigor with creative exploration, fostering a lifelong love for learning in a modern, safe environment.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all flex items-center justify-center shadow-lg group">
            Apply For Admission <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
            Take a Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
