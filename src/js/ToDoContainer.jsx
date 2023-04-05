import React, { useState } from 'react';
import Button from './Buttons';
import Item from './ToDoItem';

const TODOS = [
  { id: 1, text: '123' }];

export default function Container() {
  const [toDos, setToDos] = useState(TODOS);
  const [text, setText] = useState('');

  const deleteToDoItem = (id) => {
    setToDos((prev) => prev.filter((item) => item.id !== id));
  };
  const createItem = () => {
    if (!text) {
      return;
    }
    const todo = { text, id: Date.now() };
    setToDos((prev) => [...prev, todo]);
    setText('');
  };

  const Clear = () => {
    const list = document.querySelector('.list');
    list.innerHTML = '';
  };

  return (
    <main className="main">
      <div className="full-container">
        <div className="container">
          <h1 className="h1">ToDo lsit</h1>
          <input
            type="text"
            className="input"
            placeholder="Write task"
            value={text}
            onChange={(e) => setText(e.target.value)}

          />
          <Button text="Add task" handler={createItem} />
        </div>
        <ul className="list">
          {toDos.map(({id, text}) => <Item handleDelete={() => deleteToDoItem(id)} key={id} text={text} />)}
        </ul>
        <Button
          style={{
            backgroundColor: 'rgb(255, 161, 161)', marginTop: '10px', width: '100px', alignSelf: 'center',
          }}
          text="Clear"
          handler={Clear}
        />
      </div>
    </main>
  );
}
