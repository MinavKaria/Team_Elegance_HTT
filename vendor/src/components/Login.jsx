import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const route = isSignUp ? '/signup' : '/login';
      const userData = {
        username,
        password,
        foodName,
        quantity,
        price
      };

      // Sending data to backend using Axios
      

      // Example handling after successful login/signup
      localStorage.setItem('username', username);
      localStorage.setItem('name', password);
      localStorage.setItem('foodName', foodName);
      localStorage.setItem('quantity', quantity);
      localStorage.setItem('price', price);
      navigate('/home');
      
      console.log(response.data); // Response from the backend
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., display error message)
    }

  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">{isSignUp ? 'Sign Up' : 'Log In'}</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder='Username/Email/Name'
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
       
      
          <>
            <div className="input-container">
              <input
                type="text"
                placeholder='Food Name'
                id="foodName"
                name="foodName"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                className="food-name-input"
              />
            </div>
            <div className="input-container">
              <input
                type="number"
                placeholder='Quantity'
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="quantity-input"
              />
            </div>
            <div className="input-container">
              <input
                type="number"
                placeholder='Price'
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="price-input"
              />
            </div>
          </>
    
        
        <button type="submit" className="login-button">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default Login;
