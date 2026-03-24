import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Bell,
  Settings,
  ShieldUser
} from 'lucide-react';

const DashboardHome = () => {
  const { user } = useAuth();

  const stats = [
    { label: "Total Students", value: "1,248", icon: Users, color: "bg-blue-500", trend: "+12%" },
    { label: "Faculty Staff", value: "86", icon: ShieldUser, color: "bg-purple-500", trend: "Stable" },
    { label: "Active Classes", value: "42", icon: BookOpen, color: "bg-emerald-500", trend: "Term 2" },
    { label: "Fees Collection", value: "$42.5k", icon: DollarSign, color: "bg-amber-500", trend: "85%" }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">Admin Overview</h1>
          <p className="text-slate-500 mt-1">Status check for Excellence International School</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <button className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50">
            <Settings className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.color} p-3 rounded-xl text-white shadow-lg`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded-lg">{stat.trend}</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Recent School Activity</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
                  AL
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-bold text-slate-800">New Admission inquiry: Alex Lohan</p>
                  <p className="text-xs text-slate-500 italic">Grade 8 • Submitted 2 hours ago</p>
                </div>
                <div className="text-xs font-bold text-blue-600">Review</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-blue-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <TrendingUp className="absolute bottom-[-20px] right-[-20px] w-48 h-48 opacity-10" />
          <h2 className="text-xl font-bold mb-6 relative z-10">Quick Actions</h2>
          <div className="space-y-3 relative z-10">
            <button className="w-full text-left p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 font-medium">Add New Student</button>
            <button className="w-full text-left p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 font-medium">Post Site Update</button>
            <button className="w-full text-left p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 font-medium">Fee Management</button>
            <button className="w-full text-left p-4 rounded-2xl bg-yellow-400 text-blue-900 hover:bg-white transition-all font-bold mt-4">Generate Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
