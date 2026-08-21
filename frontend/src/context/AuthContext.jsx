import React, { createContext, useState, useEffect, useCallback } from 'react';
import { loginUser, registerUser, getCurrentUser, updateProfile as updateProfileApi } from '../services/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  const loadUser = useCallback(async () => {
    const token = localStorage.getItem('ct_token');
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const { user: currentUser } = await getCurrentUser();
      setUser(currentUser);
    } catch (err) {
      localStorage.removeItem('ct_token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  // If any API call comes back 401, log the user out client-side
  useEffect(() => {
    const handleExpired = () => {
      localStorage.removeItem('ct_token');
      setUser(null);
      setAuthError('Your session has expired. Please log in again.');
    };
    window.addEventListener('zc-auth-expired', handleExpired);
    return () => window.removeEventListener('zc-auth-expired', handleExpired);
  }, []);

  const login = async (credentials) => {
    const { token, user: loggedInUser } = await loginUser(credentials);
    localStorage.setItem('ct_token', token);
    setUser(loggedInUser);
    setAuthError(null);
    return loggedInUser;
  };

  const register = async (payload) => {
    const { token, user: newUser } = await registerUser(payload);
    localStorage.setItem('ct_token', token);
    setUser(newUser);
    setAuthError(null);
    return newUser;
  };

  const logout = () => {
    localStorage.removeItem('ct_token');
    setUser(null);
  };

  const updateProfile = async (data) => {
    const { user: updatedUser } = await updateProfileApi(data);
    setUser(updatedUser);
    return updatedUser;
  };

  const value = {
    user,
    loading,
    authError,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    login,
    register,
    logout,
    updateProfile,
    clearAuthError: () => setAuthError(null),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
