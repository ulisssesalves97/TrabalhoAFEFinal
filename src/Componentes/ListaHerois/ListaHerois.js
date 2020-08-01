import React, { useState } from "react";
import PropTypes from "prop-types";

class ListaHerois extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {dados: []};
  // }

  render() {
    if (!this.props.dados || this.props.dados.length == 0) {
      return <div>Nenhum resultado</div>;
    }
    console.log("gerando lista...", this.props.dados);
    const tabelaHerois = () => {
      this.props.dados.map((dados) => (
        <div>
          <div>
            <img
              alt="Personagem"
              src={`${dados.thumbnail.path}.${dados.thumbnail.extension}`}
            ></img>
          </div>
          <div key={dados.id}>{dados.name}</div>
        </div>
      ));
    };
    return <div>{tabelaHerois()}</div>;
  }
}

export default ListaHerois;
