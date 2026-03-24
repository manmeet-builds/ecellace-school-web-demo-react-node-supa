import React from 'react';
import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ShieldCheck
} from 'lucide-react';
import { authService } from '../../services/authService';

const DashboardLayout = () => {
  const { user, isAuthenticated } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Students', icon: Users, path: '/admin/students' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-blue-900 transition-all duration-300 flex flex-col items-center py-8 relative shadow-2xl z-50`}>
        <div className="mb-10 text-white flex items-center justify-center overflow-hidden">
          <ShieldCheck className="w-10 h-10 text-yellow-400 shrink-0" />
          {isSidebarOpen && <span className="ml-3 font-extrabold text-xl tracking-tighter whitespace-nowrap">EI ADMIN</span>}
        </div>

        <nav className="flex-grow w-full px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-4 rounded-2xl transition-all group ${
                location.pathname === item.path 
                  ? 'bg-yellow-400 text-blue-900 shadow-lg' 
                  : 'text-blue-100 hover:bg-white/10'
              }`}
            >
              <item.icon className={`w-6 h-6 shrink-0 transition-transform group-hover:scale-110 ${location.pathname === item.path ? 'text-blue-900' : 'text-blue-300'}`} />
              {isSidebarOpen && <span className="ml-4 font-bold tracking-wide">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="w-full px-4 mt-auto">
          <button 
            onClick={() => authService.signOut()}
            className="w-full flex items-center p-4 rounded-2xl text-red-300 hover:bg-red-500/20 transition-all font-bold"
          >
            <LogOut className="w-6 h-6 shrink-0" />
            {isSidebarOpen && <span className="ml-4">Sign Out</span>}
          </button>
        </div>

        {/* Toggle */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-20 -right-4 w-8 h-8 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-blue-900"
        >
          {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </aside>

      {/* Main Area */}
      <main className="flex-1 overflow-auto h-screen relative">
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center z-40">
          <h2 className="text-slate-500 font-medium italic text-sm">Today is March 23, 2025</h2>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800">{user?.email}</p>
              <p className="text-[10px] uppercase tracking-widest text-blue-600 font-bold">Supreme Admin</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center font-bold text-blue-900 uppercase">
              {user?.email?.[0]}
            </div>
          </div>
        </header>
        
        <div className="min-h-[calc(100vh-73px)]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
