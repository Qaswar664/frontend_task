import React, { createContext, useContext, useState } from 'react';
import { loginUser } from '../api/auth';
import { clearLocalStorage, getFromLocalStorage, saveToLocalStorage } from '../utils';
import { AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(getFromLocalStorage('user'));

  const login = async (username: string, password: string) => {
    try {
      const data = await loginUser(username, password);
      if (data.accessToken) {
        setUser(username);
        saveToLocalStorage('user', username);
      } else {
        console.error('Invalid login response:', data);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    clearLocalStorage();
    setUser(null);
    window.location.href = '/';
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
