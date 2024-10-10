// src/store/DarkMode.jsx
import React, { createContext, useState } from 'react';

const DarkMode = createContext();

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const value = [dark, setDark];
  return (
    <DarkMode.Provider value={value}>
      {children}
    </DarkMode.Provider>
  );
};

export default DarkMode;
