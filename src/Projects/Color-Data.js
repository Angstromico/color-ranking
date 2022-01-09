import React from 'react';
import { useGlobalContext } from './context';
import Color from './Color';
export default function ColorList({
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  const { colors, colorsH1, colorsH2 } = useGlobalContext();
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      <h1 className="header" style={{ color: colorsH1 }}>
        My Color Reviewer App
      </h1>
      <h2 className="header" style={{ color: colorsH2 }}>
        Rate the colors, add and remove the ones you want
      </h2>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
