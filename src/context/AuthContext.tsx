import React, { createContext, useContext, useState } from "react";
import axios from "axios";

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

  const login = async (username: string, password: string) => {
    console.log('Attempting login with', username, password);
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
  
      console.log('Login response:', response); // Log the response
      const data = response.data;
      if (data.accessToken) {
        setUser(username);
        localStorage.setItem('user', username);
      } else {
        console.error('Invalid login response:', data);
      }
    } catch (error) {
      console.error('Login failed:', error);
      // You can add more error handling here if needed
    }
  };
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
