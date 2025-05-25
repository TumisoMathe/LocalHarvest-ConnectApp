import React from 'react';
import ReactDOM from 'react-dom/client';
import LocalHarvestWireframes from './App.jsx'; // Keep this for now, will remove if needed for CDN
import App from './App'; // Import the default App.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <LocalHarvestWireframes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();