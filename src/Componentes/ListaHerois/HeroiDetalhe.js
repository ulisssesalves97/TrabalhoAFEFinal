import React from "react";

class HeroiDetalhe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mostrarDetalhes: false };
    this.mostrarDetalhesToggleClick = this.mostrarDetalhesToggleClick.bind(
      this
    );
  }

  mostrarDetalhesToggleClick() {
    this.setState((state) => ({
      mostrarDetalhes: !state.mostrarDetalhes,
    }));
  }

  render() {
    console.log("gerando detalhes do heroi...", heroi);
    if (!this.state.mostrarDetalhes) {
      return (
        <button onClick={this.mostrarDetalhesToggleClick}>Ver detalhes</button>
      );
    }
    var heroi = this.props.heroi;
    if (!heroi) {
      return <div> Houve um erro ao exibir os detalhes do heroi. </div>;
    }
    return (
      <div>
        <div>
          <h3>{heroi.name}</h3>
          <h6>{heroi.description}</h6>
          <div></div>
        </div>
        <div>
          <button onClick={this.mostrarDetalhesToggleClick}>
            Esconder detalhes
          </button>
        </div>
      </div>
    );
  }
}

export default HeroiDetalhe;
