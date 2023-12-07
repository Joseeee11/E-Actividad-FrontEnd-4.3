//index para probar delete mientras

//importamos React
import React from 'react';
import ReactDOM from 'react-dom/client';

//importamos CSS
import './CSS/index.css';

//importamos complementos
import {VerPelis} from './API.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Estamos en TusPelis</h1>
    <VerPelis/>

  </>
);