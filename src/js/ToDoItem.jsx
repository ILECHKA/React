/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from './Buttons';

// eslint-disable-next-line react/prop-types
export default function Item({ text, handleDelete }) {
  return (
    <li className="list__item">
      <label className="label">
        <input type="checkbox" className="checkbox" />
        <p className="label__text">{text}</p>
      </label>
      <Button text="Delete" handler={handleDelete} />
    </li>
  );
}
