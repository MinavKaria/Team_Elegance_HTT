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
    // Handle login logic here (e.g., send data to backend)
    // console.log('Username:', username);
    // console.log('Password:', password);
    // console.log('Food:', foodName);
    // console.log('quantity:', quantity);
    // console.log('price:', price);
    setUsername('');
    setPassword('');
    setFoodName('');
    setPrice('');
    setQuantity('');

    const vendorData = {
      uuidv4,
      foodName,
      quantity,
      price
    };
    console.log(vendorData);
    navigate('/home')
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
