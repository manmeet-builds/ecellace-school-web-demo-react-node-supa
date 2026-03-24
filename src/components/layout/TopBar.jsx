import React from 'react';
import { Mail, Phone, Lock, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-blue-900 text-white py-2 text-xs md:text-sm font-medium border-b border-blue-800/50">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side: Contact Info */}
        <div className="flex items-center space-x-6">
          <a href="mailto:info@excellenceschool.edu" className="flex items-center hover:text-yellow-400 transition-colors">
            <Mail className="w-3.5 h-3.5 mr-2 text-yellow-400" />
            <span className="hidden sm:inline">info@excellenceschool.edu</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center hover:text-yellow-400 transition-colors">
            <Phone className="w-3.5 h-3.5 mr-2 text-yellow-400" />
            <span>+1 234 567 890</span>
          </a>
        </div>

        {/* Right Side: School Code & Admin Login */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center bg-blue-800/50 px-3 py-1 rounded border border-blue-700/50">
            <Hash className="w-3.5 h-3.5 mr-1.5 text-yellow-400" />
            <span className="uppercase tracking-widest font-bold">School Code: EXCEL2025</span>
          </div>
          <Link 
            to="/login" 
            className="flex items-center bg-yellow-400 text-blue-900 px-4 py-1 rounded font-bold hover:bg-white transition-all shadow-sm"
          >
            <Lock className="w-3.5 h-3.5 mr-1.5" />
            Admin Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
