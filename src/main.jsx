import React from 'react';
// import "../node_modules/@flaticon/flaticon-uicons/css/all/all.css";
import './assets/SCSS/index.scss';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
