import React from 'react';
import logo from './logo.svg';
import marvelLogo from './images/marvel-logo.png'
import './App.css';
import Pesquisa from './Componentes/Pesquisa'

function App() {
  return (
    <div className="Pagina">
    <div className="Cabecalho">
     <img alt='LogoMarvel'src={marvelLogo}></img>
     </div>
      <Pesquisa/>
      </div>
     
  );
}

export default App;
