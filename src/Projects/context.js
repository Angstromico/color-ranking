import React, { useState, useContext, createContext } from 'react';

import color from './color-data';
const ColorContext = createContext();
const AppProvider = ({ children }) => {
  const [colors, setColors] = useState(color);
  const vanish = (id) => {
    const outcast = document.getElementById(id);
    outcast.classList.add('disappear');
  };
  return (
    <ColorContext.Provider
      value={{
        colors,
        setColors,
        vanish,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ColorContext);
};
export { AppProvider, ColorContext };
