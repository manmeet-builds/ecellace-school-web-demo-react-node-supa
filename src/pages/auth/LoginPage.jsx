import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Loader2, ArrowLeft, ShieldCheck } from 'lucide-react';
import { authService } from '../../services/authService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await authService.signIn({ email, password });
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to sign in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans">
      {/* --- Left Side: Branding & Design --- */}
      <div className="lg:w-1/2 bg-blue-900 relative flex flex-col items-center justify-center p-12 text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-400 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 text-center max-w-md">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/20">
            <ShieldCheck className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            EXCELLENCE <br/> 
            <span className="text-yellow-400">International School</span>
          </h1>
          <p className="text-lg text-blue-100 opacity-80 leading-relaxed">
            Welcome to the Administrative Portal. Securely manage students, faculty, and academic operations in one unified environment.
          </p>
        </div>

        {/* Footer info on left side */}
        <div className="absolute bottom-8 left-12 flex items-center space-x-2 text-sm text-blue-300">
          <span>&copy; 2025 Excellence Admin System</span>
        </div>
      </div>

      {/* --- Right Side: Login Form --- */}
      <div className="lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-16 relative">
        <Link 
          to="/" 
          className="absolute top-8 left-8 flex items-center text-slate-400 hover:text-blue-900 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Website
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Admin Login</h2>
            <p className="text-slate-500">Please enter your credentials to access the dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md text-sm text-red-700 font-medium">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@school.com"
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-800 font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Password</label>
                <button type="button" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-800 font-medium"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg active:scale-[0.98] disabled:opacity-70 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <span>Sign In to Dashboard</span>
              )}
            </button>
          </form>

          {/* Assistance link */}
          <p className="text-center mt-12 text-slate-500 text-sm">
            Need assistance? <Link to="/contact-us" className="text-blue-900 font-bold hover:underline">Contact System Administrator</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
