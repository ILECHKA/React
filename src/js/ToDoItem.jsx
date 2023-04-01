/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function Item() {
  return (
    <li className="list__item">
      <label className="label">
        <input type="checkbox" className="checkbox" />
        <p className="label__text">3</p>
      </label>
    </li>
  );
}
