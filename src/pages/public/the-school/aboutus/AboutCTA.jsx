import React from 'react';
import { getAssetUrl } from '../../../../services/supabase';

const AboutCTA = () => {
  const ctaBg = getAssetUrl('hero-bg.jpg');

  return (
    <section className="relative h-[600px] bg-gray-900 overflow-hidden">
      <img
        src={ctaBg}
        className="w-full h-full object-cover opacity-30 transform scale-110"
        alt="Join Our Community"
      />
      <div className="absolute inset-0 bg-blue-900/40 flex flex-col items-center justify-center text-center px-4 md:px-24">
        <div className="container mx-auto">
          <h2 className="text-white text-4xl md:text-6xl font-black mb-8 tracking-tighter drop-shadow-2xl">
            Start Your Journey With Us
          </h2>
          <p className="text-blue-50 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Whether you are a parent seeking a bright future for your child or an educator looking to inspire the next generation, we invite you to be a part of Excellence Public School.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-black px-12 py-5 rounded-full transition-all shadow-[0_15px_30px_-5px_rgba(234,179,8,0.3)] uppercase tracking-widest text-sm hover:scale-105 active:scale-95">
              Apply for Admission
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-900 font-black px-12 py-5 rounded-full transition-all shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] uppercase tracking-widest text-sm hover:scale-105 active:scale-95">
              Join as Educator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
