import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/header';
import Body from './Body/body';
import StaticBar from './StaticBar/StaticBar';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <div className='all'>
    <Header/>
    <Body/>
    <StaticBar/>
  </div>
);


reportWebVitals();
