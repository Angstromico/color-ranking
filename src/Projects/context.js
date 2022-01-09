import React, { useState, useContext, createContext, useEffect } from 'react';

import color from './color-data';
const ColorContext = createContext();
const AppProvider = ({ children }) => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const [colors, setColors] = useState(color);
  const [colorsH1, setColorsH1] = useState('');
  const [colorsH2, setColorsH2] = useState('');
  const randomColor = (func1, func2) => {
    let hexColor1 = '#';
    let hexColor2 = '#';
    for (let i = 0; i < 6; i++) {
      hexColor1 += hex[getRandomN()];
      hexColor2 += hex[getRandomN()];
    }
    func1(hexColor1);
    func2(hexColor2);
  };
  const setRandomHeaderColor = () => {
    let ourColors = [];
    colors.forEach((element) => {
      ourColors.push(element.color);
    });
    randomColor(setColorsH1, setColorsH2);
  };
  function getRandomN() {
    return Math.floor(Math.random() * hex.length);
  }
  useEffect(() => {
    const colorChange = setInterval(() => {
      setRandomHeaderColor();
    }, 3000);
    return () => clearInterval(colorChange);
  }, []);
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
        colorsH1,
        colorsH2,
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
