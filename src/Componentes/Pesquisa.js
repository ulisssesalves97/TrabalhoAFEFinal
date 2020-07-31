import React, { useState} from 'react';
import './Pesquisa/Pesquisa.css';
import $ from 'jquery';
import ListaHerois from './ListaHerois/ListaHerois'


const Pesquisa = (
 ) => {
    const [state, setState] = useState({  termoPesquisa:null
    });
  const {termoPesquisa} = state;
  
const chamaAPI =(pesquisaNome) => {
  const string= 'https://gateway.marvel.com:443/v1/public/characters?apikey=3bb8bee4e8e7233fee2f0fd677aa636e&nameStartsWith=' + pesquisaNome
   $.ajax({
     url: string,
     success: (resultado) =>{
       console.log(resultado.data.results);
       <ListaHerois dados={resultado.data.results}/>
     },
     error:(xhr, status, err) => {
                  
     }
   })
};
const changeHendler=(item) => {

  const busca = item.target.value
  setState({ ...state, termoPesquisa: busca})

};

    return (
      <div>
          <input  onChange={changeHendler} placeholder = {"Digite o nome do Herói"} className='caixa'/>
          <button onClick={()=> chamaAPI(termoPesquisa)}className='botao'>Buscar</button>
      </div>
    );
  };


  export default Pesquisa;