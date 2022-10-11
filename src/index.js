import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App';
import SubPage from './pages/Subpage';
import NoticeList from './pages/Board/Notice/NoticeList';
import NoticeDetails from './pages/Board/Notice/NoticeDetails';
import NotFound from './pages/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/subpage" element={<SubPage />} />
        <Route path="/notice" element={<NoticeList />} />
        <Route path="/notice/details" element={<NoticeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
