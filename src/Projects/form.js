import React, { useState, useEffect, useRef } from 'react';

const Form = ({ newColor }) => {
  const [color, setColor] = useState('');
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const txtTitle = useRef();
  const hexColor = useRef();
  const randomColor = () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomN()];
    }
    setColor(hexColor);
  };
  function getRandomN() {
    return Math.floor(Math.random() * hex.length);
  }
  useEffect(() => {
    randomColor();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = txtTitle.current.value,
      inputColor = hexColor.current.value,
      form = document.querySelector('.color-form');
    newColor(text, inputColor);
    form.reset();
    randomColor();
  };
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <legend>Put New Colors on The Form</legend>
      <label htmlFor="color-name">Color Name</label>
      <input
        ref={txtTitle}
        type="text"
        id="color-name"
        placeholder={color}
        required
      />
      <label htmlFor="color">The Color Itself</label>
      <input
        ref={hexColor}
        type="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        required
      />
      <button>New Color</button>
    </form>
  );
};
export default Form;
