import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { ToastContainer, toast } from 'react-toastify';


function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("HIHIIHIHIHI");
        const res = await API.post('/auth/login', formData);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userRole', res.data.role);
        toast.success('Login successful!');
        if (res.data.role === 'admin') navigate('/admin');
        else navigate('/');
    } catch (error) {
        console.error('Full Error:', error); // log full error
        console.error('Error Response:', error.response?.data); // log backend response
        toast.error(error.response?.data?.message || 'Login failed');
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;