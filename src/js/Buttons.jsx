import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Button({ text, handler, style }) {
  return <button style={style} type="button" onClick={handler} className="button">{text}</button>;
}
