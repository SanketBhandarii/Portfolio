// src/store/DarkMode.jsx
import React, { createContext, useContext, useState } from 'react';

const DarkMode = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const value = [theme, setTheme];
  return (
    <DarkMode.Provider value={value}>
      {children}
    </DarkMode.Provider>
  );
};

export default function useTheme(){
  return useContext(DarkMode);
}

// export default DarkMode;
