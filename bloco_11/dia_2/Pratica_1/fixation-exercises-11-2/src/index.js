import React from 'react';
import ReactDOM from 'react-dom';
import Image from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Image source = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText = 'cute cat staring' />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
