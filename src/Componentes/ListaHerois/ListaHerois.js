import React, { useState } from "react";
import PropTypes from "prop-types";
import Heroi from "../ListaHerois/Herois.css";
import HeroiDetalhe from "../ListaHerois/HeroiDetalhe.js";
import ListaPaginas from "../ListaPaginas.js";

class ListaHerois extends React.Component {
  render() {
    var herois = this.props.herois;
    if (!herois || herois.length == 0) {
      return <div>Nenhum resultado</div>;
    }
    const tabelaHerois = herois.map((heroi) => (
        <div className="heroi">
          <h1 className="heroi__titulo">{heroi.name}</h1>
          <img
            alt="Personagem"
            src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`}
            className="heroi__image"
          ></img>
          <HeroiDetalhe heroi={heroi} />
        </div>
    ));
    var paginacao = this.props.paginacao;
    var quantidadePaginas = Math.ceil(paginacao.total / paginacao.limit);
    var paginaAtual = Math.ceil(paginacao.offset / paginacao.limit) + 1;
    return (
      <div>
        <ListaPaginas
          quantidadePaginas={quantidadePaginas}
          paginaAtual={paginaAtual}
          Navegar={paginacao.Navegar}
        >
          <div className="heroi__container">
            {tabelaHerois}
          </div>
        </ListaPaginas>
      </div>
    );
  }
}

export default ListaHerois;
