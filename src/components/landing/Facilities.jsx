import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../services/supabase';

const Facilities = () => {
  const facilities = [
    {
      title: "Science & Robotics Lab",
      img: getAssetUrl('facilities/science.jpg', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'),
      desc: "Equipped with the latest technology for hands-on learning."
    },
    {
      title: "Central Library",
      img: getAssetUrl('facilities/library.jpg', 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800'),
      desc: "A vast collection of 20,000+ books and digital resources."
    },
    {
      title: "Multipurpose Sports Complex",
      img: getAssetUrl('facilities/sports.jpg', 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800'),
      desc: "Olympic-standard infrastructure for indoor and outdoor sports."
    },
    {
      title: "Smart Digital Classrooms",
      img: getAssetUrl('facilities/classroom.jpg', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'),
      desc: "Interactive learning environments with modern visual aids."
    },
    {
      title: "Main Auditorium",
      img: getAssetUrl('facilities/auditorium.jpg', 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800'),
      desc: "500-seater state-of-the-art facility for cultural events."
    },
    {
      title: "Modern Cafeteria",
      img: getAssetUrl('facilities/cafeteria.jpg', 'https://images.unsplash.com/photo-1574966739982-2b783bc21927?auto=format&fit=crop&q=80&w=800'),
      desc: "Hygienic dining space serving nutritious and balanced meals."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Infrastructure</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001e4a]">World-Class Facilities</h2>
          <p className="mt-4 text-slate-500 font-medium">
            We provide our students with the best-in-class environment to foster growth and creativity in every dimension.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl aspect-square shadow-lg border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100">
              <img 
                src={facility.img} 
                alt={facility.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001e4a] via-[#001e4a]/20 to-transparent group-hover:via-[#001e4a]/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 p-8 text-white text-left w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-bold mb-3">{facility.title}</h4>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6 line-clamp-2 leading-relaxed font-medium">
                  {facility.desc}
                </p>
                <div className="h-1.5 w-0 group-hover:w-16 bg-blue-600 transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group">
            Explore All Facilities <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
