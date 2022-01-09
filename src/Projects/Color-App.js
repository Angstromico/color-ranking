import React from 'react';
import { useGlobalContext } from './context';
import ColorList from './Color-Data';
import Form from './form';
export default function App() {
  const { colors, setColors } = useGlobalContext();
  const newColor = (title, color) => {
    const id = new Date().valueOf(),
      rating = randow5(),
      colorObj = {
        title,
        color,
        id,
        rating,
      },
      setColor = [...colors, colorObj];
    setColors(setColor);
  };
  function randow5() {
    return Math.floor(Math.random() * 5);
  }
  return (
    <>
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
      />
      <Form newColor={newColor} />
    </>
  );
}
