import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., send data to backend)
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder='Username/Email'
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="username-input"
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder='Password'
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
          />
        </div>
        <button type="submit" className="login-button" onClick={()=> {
            navigate('/home')
        }}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;