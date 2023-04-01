import React from 'react';
import Button from './Buttons';
import List from './ToDoList';
import Item from './ToDoItem';

export default function Container() {
  return (
    <main className="main">
      <div className="full-container">
        <div className="container">
          <h1 className="h1">ToDo lsit</h1>
          <input type="text" className="input" placeholder="Write task" />
          <Button text="Add task" handler="" />
        </div>
        <List>
          <Item> </Item>
        </List>
        <Button
          style={{
            backgroundColor: 'rgb(255, 161, 161)', marginTop: '10px', width: '100px', alignSelf: 'center',
          }}
          text="Clear"
          handler=""
        />
      </div>
    </main>
  );
}
