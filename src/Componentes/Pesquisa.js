import React, { useState } from "react";
import "./Pesquisa/Pesquisa.css";
import $ from "jquery";
import ListaHerois from "./ListaHerois/ListaHerois";

class Pesquisa extends React.Component {
  constructor(props) {
    super(props);
    this.chamaAPI = this.chamaAPI.bind(this);
    this.changeHendler = this.changeHendler.bind(this);
    this.state = {
      termoPesquisa: null,
      listaHerois: [],
    };
  }

  chamaAPI(pesquisaNome) {
    const string =
      `https://gateway.marvel.com:443/v1/public/characters?` +
      `apikey=3bb8bee4e8e7233fee2f0fd677aa636e` + 
      (pesquisaNome && pesquisaNome.length > 0? `&nameStartsWith=${pesquisaNome}` : ''); 
    var contexto = this;
    $.ajax({
      url: string,
      success: (resultado) => {
        console.log(resultado.data.results);
        var dados = resultado.data;
        var paginacao = {
          offset: dados.offset,
          limit: dados.limit,
          total: dados.total,
          count: dados.count,
        };
        this.setState({
          ...this.state,
          listaHerois: (
            <ListaHerois
              herois={dados.results}
              paginacao={paginacao}
            />
          ),
        });
      },
      error: (xhr, status, err) => {},
    });
  }

  changeHendler(item) {
    const busca = item.target.value;
    this.setState({ ...this.state, termoPesquisa: busca });
  }

  render() {
    return (
      <div>
        <div className='pesquisa'>
          <input
            onChange={this.changeHendler}
            placeholder={"Digite o nome do Herói"}
            className="pesquisa__caixa"
          />
          <button
            onClick={() => this.chamaAPI(this.state.termoPesquisa)}
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
