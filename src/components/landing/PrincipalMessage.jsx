import React from 'react';
import { Quote } from 'lucide-react';
import { getAssetUrl } from '../../services/supabase';

const PrincipalMessage = () => {
  const principalImg = getAssetUrl('team/principal.jpg', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000');
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch">
          {/* Left: Text Content */}
          <div className="lg:w-3/5 p-10 md:p-20 text-left relative">
            <Quote className="absolute top-10 right-10 w-24 h-24 text-blue-50 opacity-10 rotate-180" />
            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Leadership Message</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">From the Principal's Desk</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg relative z-10">
              <p>
                "At Excellence International, our goal is to provide an environment where every child feels valued and inspired. We are committed to academic rigor, emotional well-being, and community values."
              </p>
              <p>
                Education is a shared journey between the school, the home, and the world. We look forward to partnering with you to unlock your child's highest potential in an atmosphere of respect and innovation.
              </p>
            </div>
            <div className="mt-12">
              <p className="text-xl font-bold text-blue-900">Dr. Sarah Johnson</p>
              <p className="text-blue-600 font-medium italic">Principal, Excellence International</p>
            </div>
          </div>

          {/* Right: Principal Image */}
          <div className="lg:w-2/5 relative min-h-[400px]">
            <img 
              src={principalImg} 
              alt="Principal Dr. Sarah Johnson" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
