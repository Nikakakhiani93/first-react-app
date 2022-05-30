import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navbar from '../src/components/Navbar';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
