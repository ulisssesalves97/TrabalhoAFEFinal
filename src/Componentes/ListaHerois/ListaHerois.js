import React, { useState} from 'react';


const ListaHerois =({
    nome, caminhoImagem, extension
  }) =>{


    return (
        <tr>
        <td> <img alt='Personagem'src={`${caminhoImagem}.${extension}`}></img></td>
        <td>{nome}</td>
      </tr>
    )

};
export default ListaHerois;