import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const IMAGES = {
//   1: require('./src/characters.Apple Bloom.png'),
//   2: require('./src/characters.Apple Bloom.png'),
//   3: require('./src/characters.Apple Bloom.png'),
//   4: require('./src/characters.Apple Bloom.png'),
//   5: require('./src/characters.Apple Bloom.png'),
//   6: require('./src/characters.Apple Bloom.png'),
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
