import React from "react";
import ListaPaginas from "../ListaPaginas.js";
import "../ListaHerois/HeroiDetalhe.css";

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
    var heroi = this.props.heroi;
    if (!heroi) {
      return <div> Houve um erro ao exibir os detalhes do heroi. </div>;
    }
    return (
      <div className="detalhe">
        <div className={this.state.mostrarDetalhes && "detalhe--esconder"}>
          <button
            className="detalhe__button"
            onClick={this.mostrarDetalhesToggleClick}
          >
            Ver detalhes
          </button>
        </div>
        <div className={!this.state.mostrarDetalhes && "detalhe--esconder"}>
          <div className="detalhe-body">
            <div className="heroi-detalhe">
              <p className="heroi-detalhe__texto">{heroi.description}</p>
              <div className="heroi-detalhe__sublistagem">
                <ListaPaginas
                  quantidadePaginas={
                    heroi.stories.available / heroi.stories.returned
                  }
                  paginaAtual={1}
                  Navegar={() => alert(heroi.name)}
                >
                  <div className="heroi-detalhe">
                    <p className="heroi-detalhe__texto">
                      
                      {("teste") /* {heroi.stories.collectionURI} */}
                    </p>
                  </div>
                </ListaPaginas>
              </div>
              <ul className="grid heroi-grid">
                {heroi.urls.map((item) => (
                  <li className="grid__item">
                    <a className="grid__button" href={item.url}>
                      {item.type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="detalhe-footer">
            <button
              className="detalhe__button"
              onClick={this.mostrarDetalhesToggleClick}
            >
              Esconder detalhes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroiDetalhe;
