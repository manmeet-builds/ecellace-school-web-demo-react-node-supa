import React from 'react';
import { Users, BookOpen, Award, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Faculty",
      desc: "Our highly qualified and passionate educators bring years of international teaching experience.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-600"
    },
    {
      title: "Modern Facilities",
      desc: "Smart classrooms, advanced science labs, and extensive sports infrastructure for holistic development.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-indigo-600"
    },
    {
      title: "Global Curriculum",
      desc: "Blending traditional values with international standards to prepare students for global universities.",
      icon: <Award className="w-8 h-8" />,
      color: "bg-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-4">Our Excellence</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">World Class Education System</h2>
          <p className="text-slate-600 leading-relaxed">
            We provide a nurturing environment that encourages students to excel academically, socially, and emotionally through our comprehensive curriculum.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className={`${feature.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{feature.desc}</p>
              <a href="#" className="text-blue-900 font-bold flex items-center text-sm group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
