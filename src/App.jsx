import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';
import DashboardLayout from './components/layout/DashboardLayout';
import LandingPage from './pages/public/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardHome from './pages/admin/DashboardHome';
import AboutUs from './pages/public/the-school/AboutUs';
import ApplyNow from './pages/public/admission/ApplyNow';
import ContactUs from './pages/public/ContactUs';
import { 
  Facilities, Staff, Disclosure, 
  News, Events, 
  PhotoGallery, VideoGallery, 
  Fees, Calendar, Timing, ParentsCorner,
  Procedure, Rules 
} from './pages/public/NavPages';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Public Website Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            
            {/* The School */}
            <Route path="the-school/about" element={<AboutUs />} />
          <Route path="the-school/facilities" element={<Facilities />} />
          <Route path="the-school/staff" element={<Staff />} />
          <Route path="the-school/disclosures" element={<Disclosure />} />
          
          {/* News & Events */}
          <Route path="news-events/news" element={<News />} />
          <Route path="news-events/events" element={<Events />} />
          
          {/* Gallery */}
          <Route path="gallery/photo" element={<PhotoGallery />} />
          <Route path="gallery/video" element={<VideoGallery />} />
          
          {/* Academic */}
          <Route path="academic/fees" element={<Fees />} />
          <Route path="academic/calendar" element={<Calendar />} />
          <Route path="academic/timing" element={<Timing />} />
          <Route path="academic/parents" element={<ParentsCorner />} />
          
          {/* Admission */}
          <Route path="admission/procedure" element={<Procedure />} />
          <Route path="admission/rules" element={<Rules />} />
          <Route path="admission/apply" element={<ApplyNow />} />
          
          {/* Contact */}
          <Route path="contact-us" element={<ContactUs />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="students" element={<div className="p-8">Students Management (Coming Soon)</div>} />
          <Route path="settings" element={<div className="p-8">System Settings (Coming Soon)</div>} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
