import React from 'react';
import { createRoot } from 'react-dom/client';
import Container from './ToDoContainer';

const root = createRoot(document.getElementById('app'));

root.render(Container());
