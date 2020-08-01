import React, { useState } from "react";
import PropTypes from "prop-types";
import Heroi from "../ListaHerois/Herois.css" ;
import HeroiDetalhe from "../ListaHerois/HeroiDetalhe.js";
import ListaPaginas from "../ListaPaginas.js";

class ListaHerois extends React.Component {
  render() {
    var herois = this.props.herois;
    if (!herois || herois.length == 0) {
      return <div>Nenhum resultado</div>;
    }
    const tabelaHerois = herois.map((heroi) => (
      <div>
        <table className='tabela'>
          <tr>
            <td>
              <img
                alt="Personagem"
                src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`}
                className="tabela__image"
              ></img>
            </td>
            <td key={heroi.id}>{heroi.name}</td>
          </tr>
        </table>
        <HeroiDetalhe heroi={heroi} />
      </div>
    ));
    var paginacao = this.props.paginacao;
    var quantidadePaginas = Math.ceil(paginacao.total / paginacao.limit);
    var paginaAtual = Math.floor(paginacao.offset + 1 / paginacao.limit) + 1;
    return (
      <ListaPaginas
        quantidadePaginas={quantidadePaginas}
        paginaAtual={paginaAtual}
        Navegar={() => alert(`${paginacao.count} herois encontrados`)}
      >
        {tabelaHerois}
      </ListaPaginas>
    );
  }
}

export default ListaHerois;
