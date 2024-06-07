import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from './authSlice';
import api from '../../api';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [login, setLogin] = useState(true); 
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = login
        ? await api.post('/auth/login', { username, password })
        : await api.post('/auth/register', { username, password });

      const { token } = response.data;
      dispatch(setToken(token));

      // * Save token to localStorage for persistence
      localStorage.setItem('token', token);

    } catch (err) {
      setError(
        login
          ? 'Invalid credentials. Please try again.'
          : 'User already exists. Please log in.'
      );
    }
  };

  return (
    <div>
      <h2>{login ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">{login ? 'Login' : 'Signup'}</button>
      </form>
      <button onClick={() => setLogin(!login)}>
        {login ? 'Switch to Signup' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Login;
