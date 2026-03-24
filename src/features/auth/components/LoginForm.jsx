import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../services/authService';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await authService.login(email, password);
      navigate('/portal/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 w-full max-w-sm">
      {error && <div className="text-red-500 bg-red-50 p-2 rounded text-sm">{error}</div>}
      <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Logging in...' : 'Log In'}
      </Button>
    </form>
  );
};
