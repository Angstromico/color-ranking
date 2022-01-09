import React, { useEffect } from 'react';
import { useGlobalContext } from './context';
import StarRating from './Start';
import { FaTrash } from 'react-icons/fa';
export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  const { vanish } = useGlobalContext();
  const disapearing = () => {
    vanish(id);
    setTimeout(() => {
      onRemove(id);
    }, 5000);
  };
  useEffect(() => {
    return () => clearTimeout(disapearing);
  }, [disapearing]);
  return (
    <section>
      <h1 style={{ color: color }}>{title}</h1>
      <div className="start-container">
        <button onClick={() => disapearing()}>
          <FaTrash />
        </button>
      </div>
      <div
        style={{ height: 50, backgroundColor: color }}
        className="appear"
        id={id}
      />
      <div className="start-container">
        <StarRating
          selectedStars={rating}
          onRate={(rating) => onRate(id, rating)}
        />
      </div>
    </section>
  );
}
