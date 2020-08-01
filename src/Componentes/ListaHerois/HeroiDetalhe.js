import React from "react";
import ListaPaginas from "../ListaPaginas.js";

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
      <div className="detalhe">
        <div className="detalhe-body">
          <div className="heroi-detalhe">
            <h3 className="heroi-detalhe__titulo">{heroi.name}</h3>
            <p className="heroi-detalhe__texto">{heroi.description}</p>
            <ul className="grid">
              {heroi.urls.map((item) => (
                <li className="grid__item">
                  <a className="link" href={item.url}>
                    {item.type}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <ListaPaginas
                quantidadePaginas={
                  heroi.stories.available / heroi.stories.returned
                }
                paginaAtual={1}
                Navegar={() => alert(heroi.name)}
              >
                <p>{heroi.stories.collectionURI}</p>
              </ListaPaginas>
            </div>
          </div>
        </div>
        <div className="detalhe-footer">
          <button
            className="detalhe-footer__botao"
            onClick={this.mostrarDetalhesToggleClick}
          >
            Esconder detalhes
          </button>
        </div>
      </div>
    );
  }
}

export default HeroiDetalhe;
