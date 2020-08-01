import React from "react";
import "./Pesquisa/Pesquisa.css";
import ListaHerois from "./ListaHerois/ListaHerois";
import ApiMarvel from "../cross/api-marvel.js";

class Pesquisa extends React.Component {
  constructor(props) {
    super(props);
    this.ObterPersonagens = this.ObterPersonagens.bind(this);
    this.changeHendler = this.changeHendler.bind(this);
    this.api = new ApiMarvel();
    this.state = {
      termoPesquisa: null,
      listaHerois: [],
      paginacao: null,
    };
  }

  ObterPersonagens(paginaNumero = 0) {
    var onSuccess = (resultado) => {
      var dados = resultado.data;
      var paginacao = {
        offset: dados.offset,
        limit: dados.limit,
        total: dados.total,
        count: dados.count,
        Navegar: (paginaNumero) => {
          this.ObterPersonagens(paginaNumero);
        },
      };
      this.setState({
        ...this.state,
        listaHerois: (
          <ListaHerois herois={dados.results} paginacao={paginacao} />
        ),
        paginacao: paginacao,
      });
    };
    var offset = 0;
    var paginacao = this.state.paginacao;
    if (paginacao) {
      offset = (paginaNumero - 1) * paginacao.limit;
    }
    this.api.ObterPersonagens(
      onSuccess,
      null,
      this.state.termoPesquisa,
      offset
    );
  }

  changeHendler(item) {
    const busca = item.target.value;
    this.setState({ ...this.state, termoPesquisa: busca });
  }

  render() {
    return (
      <div>
        <div className="pesquisa">
          <input
            onChange={this.changeHendler}
            placeholder={"Digite o nome do Herói"}
            className="pesquisa__caixa"
          />
          <button
            onClick={() => this.ObterPersonagens()}
            className="pesquisa__botao"
          >
            Buscar
          </button>
        </div>
        <div>{this.state.listaHerois}</div>
      </div>
    );
  }
}
export default Pesquisa;
