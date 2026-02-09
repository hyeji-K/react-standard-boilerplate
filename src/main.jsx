import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

/**
 * src/main.jsx
 * 
 * - React 앱의 진입점(Entry Point)입니다.
 * - DOM에 React Root를 생성하고 App을 렌더링합니다.
 * - BrowserRouter 등 최상위 설정이 위치합니다.
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
