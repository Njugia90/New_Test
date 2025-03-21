// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeToggle from './ThemeToggle';

ReactDOM.render(
  <React.StrictMode>
    <ThemeToggle />
  </React.StrictMode>,
  document.getElementById('Main.jsx') // This links the component to the div in HTML
);
