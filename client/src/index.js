import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Add Router here
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Use Router here to wrap the entire app */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
