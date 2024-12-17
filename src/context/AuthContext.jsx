import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios directly

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Axios instance with default configurations
  const api = axios.create({
    baseURL: 'https://ecommerse-assingment-backend.onrender.com', // Backend URL
    withCredentials: true, // Include cookies in requests
  });

  // Check if user is logged in on initial load
  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      fetchUserName(userId).then((name) => {
        setUser({ userId, name });
      });
    }
  }, []);

  // Signup function
  const signup = async (name, email, password) => {
    try {
      const response = await api.post('/auth/signup', { name, email, password });
      const { userId } = response.data;

      // Store userId in sessionStorage
      sessionStorage.setItem('userId', userId);

      setUser({ name, email, userId });
      return userId;
    } catch (error) {
      console.error('Signup error:', error.response ? error.response.data : error.message);
      alert('Signup failed. Please try again later.');
      throw error; // Re-throw to ensure the caller is aware of the failure
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });

      if (response.data.message === 'Login successful') {
        const { userId } = response.data;
        
        // Save userId in sessionStorage
        sessionStorage.setItem('userId', userId);

        // Update the state with the logged-in user
        setUser({ email, userId });

        return 'Login successful';
      } else {
        throw new Error('Login failed');
      }
    } catch (err) {
      if (err.response?.data?.error === 'Account is suspended') {
        alert('Your account is suspended from further notice due to unusual activity');
      } else if (err.response?.data?.error === 'Account is blocked') {
        alert('Your account has been terminated');
      }
      console.error('Login error:', err.response?.data?.error || err.message);
      throw err;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await api.post('/auth/logout');
      sessionStorage.removeItem('userId');
      setUser(null);
    } catch (err) {
      console.error('Logout error:', err.message);
    }
  };

  // Fetch the user name by userId
  const fetchUserName = async (userId) => {
    try {
      const response = await api.get(`/auth/user/${userId}`);
      return response.data.name;
    } catch (err) {
      console.error('Error fetching username:', err);
      return '';
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, fetchUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth };
