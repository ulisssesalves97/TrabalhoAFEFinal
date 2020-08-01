import React, { useState } from "react";
import PropTypes from "prop-types";
import Heroi from "../ListaHerois/Herois.css" ;
import HeroiDetalhe from "../ListaHerois/HeroiDetalhe.js";

class ListaHerois extends React.Component {
  render() {
    if (!this.props.dados || this.props.dados.length == 0) {
      return <div>Nenhum resultado</div>;
    }
    const tabelaHerois = this.props.dados.map((dados) => (
        <div>
        <table className='tabela'>
          <tr>
            <td><img
              alt="Personagem"
              src={`${dados.thumbnail.path}.${dados.thumbnail.extension}`}
            className='image'></img></td>
          <td key={dados.id}>{dados.name}</td>
          </tr>
          </table>
          <HeroiDetalhe heroi={dados} />
          </div>
      ));
    return <div>{tabelaHerois}</div>;
  }
}

export default ListaHerois;
