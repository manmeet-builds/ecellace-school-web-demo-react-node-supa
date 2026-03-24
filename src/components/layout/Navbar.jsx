import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Plus
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileSubmenu = (name) => {
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'The School',
      submenu: [
        { name: 'About Us', href: '/the-school/about' },
        { name: 'School Facility', href: '/the-school/facilities' },
        { name: 'Teachers & Staff', href: '/the-school/staff' },
        { name: 'Mandatory Disclosure', href: '/the-school/disclosures' },
      ],
    },
    {
      name: 'News & Event',
      submenu: [
        { name: 'News', href: '/news-events/news' },
        { name: 'Events', href: '/news-events/events' },
      ],
    },
    {
      name: 'Gallery',
      submenu: [
        { name: 'Photo', href: '/gallery/photo' },
        { name: 'Video', href: '/gallery/video' },
      ],
    },
    {
      name: 'Academic',
      submenu: [
        { name: 'Fee Structure', href: '/academic/fees' },
        { name: 'Academic Calendar', href: '/academic/calendar' },
        { name: 'School Timing', href: '/academic/timing' },
        { name: 'Parents Corner', href: '/academic/parents' },
      ],
    },
    {
      name: 'Admission',
      highlight: true,
      submenu: [
        { name: 'Admission Procedure', href: '/admission/procedure' },
        { name: 'Rules and Regulation', href: '/admission/rules' },
        { name: 'Apply Now (2025-26)', href: '/admission/apply', special: true },
      ],
    },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <>
      <header className={`w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
        <nav className="container mx-auto px-4 md:px-12 flex justify-between items-center py-4">
          {/* Logo Area */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">E</div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-blue-900 leading-tight">EXCELLENCE</h1>
              <p className="text-[10px] md:text-xs tracking-widest text-gray-500 uppercase">International School</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-1 text-sm font-medium text-gray-700">
            {menuItems.map((item, idx) => (
              <li key={idx} className="relative group">
                {item.submenu ? (
                  <>
                    <button className={`px-3 py-2 flex items-center group-hover:text-blue-900 transition-colors ${item.highlight ? 'text-blue-900 font-bold' : ''}`}>
                      {item.name} <ChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl border-t-2 border-blue-900 py-2 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.submenu.map((sub, sIdx) => (
                        <Link 
                          key={sIdx} 
                          to={sub.href} 
                          className={`block px-4 py-2 hover:bg-blue-50 border-b border-gray-50 last:border-0 text-gray-600 hover:text-blue-900 ${sub.special ? 'bg-yellow-50 font-semibold' : ''}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={item.href} className="px-3 py-2 hover:text-blue-900 transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-blue-900 p-2 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* --- Mobile Menu Drawer --- */}
      <div className={`fixed inset-0 z-[100] transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute right-0 top-0 h-full w-full max-w-[300px] bg-white shadow-2xl flex flex-col overflow-hidden text-slate-900">
          <div className="flex justify-between items-center p-5 border-b bg-blue-900 text-white">
            <span className="font-bold uppercase tracking-wider">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            <nav className="flex flex-col text-gray-700 font-medium">
              {menuItems.map((item, idx) => (
                <div key={idx} className="border-b">
                  {item.submenu ? (
                    <>
                      <button 
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className={`w-full flex justify-between items-center p-4 hover:bg-blue-50 ${item.highlight ? 'text-blue-900 font-bold' : ''}`}
                      >
                        {item.name} <Plus className={`w-3 h-3 transition-transform ${activeMobileSubmenu === item.name ? 'rotate-45' : ''}`} />
                      </button>
                      <div className={`bg-slate-50 overflow-hidden transition-all duration-300 ${activeMobileSubmenu === item.name ? 'max-h-96' : 'max-h-0'}`}>
                        {item.submenu.map((sub, sIdx) => (
                          <Link 
                            key={sIdx} 
                            to={sub.href} 
                            className={`block p-4 pl-8 border-b border-white text-sm hover:text-blue-900 ${sub.special ? 'bg-yellow-50 font-bold text-blue-900' : ''}`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link to={item.href} className="block p-4 hover:bg-blue-50">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
