import React, { useState} from 'react';
import PropTypes from 'prop-types';


const ListaHerois =({
   dados
  }) =>{

    const tabelaHerois =() =>{dados.map((dados) =>
        <div>
        <div> 
          <img alt='Personagem'src={`${dados.thumbnail.path}.${dados.thumbnail.extension}`}></img>
        </div>
         <div key={dados.id}>
           {dados.name}
         </div>  
         </div>
      );
    };

    return(
      tabelaHerois()
    )
  
};
ListaHerois.propTypes = {
  dados: PropTypes.array.isRequired,
};
export default ListaHerois;