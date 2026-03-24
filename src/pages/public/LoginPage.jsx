import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../features/auth/components/LoginForm';
import { useAuth } from '../../context/AuthProvider';

const LoginPage = () => {
  const { loginAsGuest } = useAuth();
  const navigate = useNavigate();

  const handleGuestAccess = () => {
    loginAsGuest();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md ring-1 ring-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>
        <LoginForm />
        
        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <button 
            onClick={handleGuestAccess}
            className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
          >
            Explore with Guest Access (Dev Mode)
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
