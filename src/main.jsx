import React from 'react';
import ReactDom from 'react-dom';
import DummyComponent from './components/DummyComponent/DummyComponent.jsx';
import './main.css';

ReactDom.render(
  <DummyComponent />,
  document.getElementById('Mount')
);
