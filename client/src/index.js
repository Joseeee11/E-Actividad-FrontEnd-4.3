//index para probar delete mientras

//importamos React
import React from 'react';
import ReactDOM from 'react-dom/client';

//importamos CSS
import './CSS/index.css';
import './CSS/modoOscuro.css';

//importamos complementos
// import {Buscar} from './Buscador.js';
import {Main} from './Contenido'
import ContactForm from './Form';
import Footer from './Footer';
import Info from './LadingInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Main/>
    <Info/>
    <ContactForm/>
    <Footer/>

  </>
);