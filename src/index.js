//react import
import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-oldschool-dark';

//components
import App from './App';

//style
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//options for alert component
const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '50px',
  transition: transitions.FADE
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
