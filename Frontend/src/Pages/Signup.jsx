import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import './Signup.css'; // Importing our clean new stylesheet

export  function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState(''); // Handles verification notifications
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError('');
    setMessage('');
    setLoading(false);

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Check if user session was generated immediately (Email confirmation disabled in Supabase settings)
      if (data?.session) {
        navigate('/');
      } else {
        // If email confirmation is turned on in your Supabase project settings
        setMessage('✨ Account created! Please check your email inbox to confirm your account.');
        setLoading(false);
      }
    }
  };

  return (
    <div className="auth-page-center">
      <div className="auth-card">
        <h2>Create an Account</h2>
        <p className="auth-subtitle">Join ShopEase today and discover amazing deals</p>
        
        <input 
          placeholder="Email Address" 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        <input 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        
        {error && <p className="auth-error">{error}</p>}
        {message && <p className="auth-success">{message}</p>}
        
        <button 
          className="auth-btn full" 
          onClick={submit} 
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
        
        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}