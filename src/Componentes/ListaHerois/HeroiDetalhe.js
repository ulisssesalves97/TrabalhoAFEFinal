import React from "react";
import ListaPaginas from "../ListaPaginas.js";
import "../ListaHerois/HeroiDetalhe.css";
import HeroiDetalheLista from "../ListaHerois/HeroiDetalheLista.js";

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
              <HeroiDetalheLista
                titulo="Quadrinhos"
                lista={heroi.comics.items}
                descricaoKey="name"
                urlKey="resourceURI"
              />
              <HeroiDetalheLista
                titulo="Séries"
                lista={heroi.series.items}
                descricaoKey="name"
                urlKey="resourceURI"
              />{" "}
              <HeroiDetalheLista
                titulo="Histórias"
                lista={heroi.stories.items}
                descricaoKey="name"
                urlKey="resourceURI"
              />{" "}
              <HeroiDetalheLista
                titulo="Eventos"
                lista={heroi.events.items}
                descricaoKey="name"
                urlKey="resourceURI"
              />
              <HeroiDetalheLista
                titulo="Confira mais informações"
                lista={heroi.urls}
                descricaoKey="type"
                urlKey="url"
              />
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
