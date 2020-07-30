import React from 'react';
import logo from './logo.svg';
import marvelLogo from './images/marvel-logo.png'
import './App.css';
import Pesquisa from './Componentes/Pesquisa'

function App() {
  return (
    <div className="altoPagina">
     <img alt='LogoMarvel'src={marvelLogo} className='logo'></img>
      <Pesquisa/>
      </div>
     
  );
}

export default App;
