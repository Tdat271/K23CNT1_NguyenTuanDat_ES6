import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './NtdApp';
import reportWebVitals from './reportWebVitals';
import NtdApp from './NtdApp';

const ntdRoot = ReactDOM.createRoot(document.getElementById('ntdRoot'));
ntdRoot.render(
  //<React.StrictMode>
    <NtdApp />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
