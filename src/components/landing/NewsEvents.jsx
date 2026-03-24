import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { getAssetUrl } from '../../services/supabase';

const NewsEvents = () => {
  const newsItems = [
    {
      date: "Oct 24, 2024",
      title: "Annual Science Exhibition: Innovation Unleashed",
      category: "Event",
      img: getAssetUrl('news/science.jpg', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800')
    },
    {
      date: "Oct 15, 2024",
      title: "Winner of Inter-School Basketball Championship",
      category: "Achievement",
      img: getAssetUrl('news/sports.jpg', 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800')
    },
    {
      date: "Oct 05, 2024",
      title: "New Modern Robotics Lab Inauguration",
      category: "Campus Update",
      img: getAssetUrl('news/robotics.jpg', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800')
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="mb-6 md:mb-0 text-left">
            <h3 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-4">Inside the Campus</h3>
            <h2 className="text-3xl md:text-4xl font-bold">Latest News & Events</h2>
          </div>
          <a href="#" className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center">
            View All Events <Calendar className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center text-slate-400 text-sm mb-3">
                <Clock className="w-4 h-4 mr-2" />
                {item.date}
              </div>
              <h4 className="text-xl font-bold group-hover:text-blue-900 transition-colors line-clamp-2 text-left">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
