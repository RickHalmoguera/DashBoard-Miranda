import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  )

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true')
    setLoggedIn(true)
  }

  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    setLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
