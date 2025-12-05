// Login.jsx
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css'

const Login = () => {
  const Api_Url = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${Api_Url}/api/user/login`, { email, password });
      if (res.status === 200 || res.status === 201) {
        const token = res.data.token;
        localStorage.setItem('role', res.data.user.role);
        localStorage.setItem('SupperAdminId', res.data.user._id);
        localStorage.setItem('token', token);
        navigate('/main-page');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-card login-form">
        <h2 className="login-title">Login</h2>

        <div className="login-input-group">
          <label>Email</label>
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="login-input-group">
          <label>Password</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;

