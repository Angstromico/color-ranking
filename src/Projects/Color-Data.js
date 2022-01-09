import React from 'react';
import { useGlobalContext } from './context';
import Color from './Color';
export default function ColorList({
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  const { colors } = useGlobalContext();
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
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
