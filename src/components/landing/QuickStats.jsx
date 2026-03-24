import React from 'react';
import { Users, Award, BookOpen, Calendar } from 'lucide-react';

const QuickStats = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 md:px-12 -mt-12 hidden md:block">
      <div className="grid grid-cols-4 gap-6 bg-white shadow-2xl rounded-2xl p-8 border border-slate-100">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">1,200+</p>
            <p className="text-xs text-slate-500 uppercase font-semibold">Students</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">100%</p>
            <p className="text-xs text-slate-500 uppercase font-semibold">Pass Rate</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">15:1</p>
            <p className="text-xs text-slate-500 uppercase font-semibold">Student-Teacher</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-700">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">20+ Yrs</p>
            <p className="text-xs text-slate-500 uppercase font-semibold">Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
