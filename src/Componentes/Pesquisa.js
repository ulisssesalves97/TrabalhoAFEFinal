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
      "https://gateway.marvel.com:443/v1/public/characters?apikey=3bb8bee4e8e7233fee2f0fd677aa636e&nameStartsWith=" +
      pesquisaNome;
 
    var contexto = this;
    $.ajax({
      url: string,
      success: (resultado) => {
        console.log(resultado.data.results);
        this.setState({
          ...this.state,
          listaHerois: <ListaHerois dados={resultado.data.results} key="teste" />,
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
      <div>
        <input
          onChange={this.changeHendler}
          placeholder={"Digite o nome do Herรณi"}
          className="caixa"
        />
        <button
          onClick={() => this.chamaAPI(this.state.termoPesquisa)}
          className="botao"
        >
          Buscar
        </button>
 
      </div>
      <div>
        {this.state.listaHerois}
      </div>
    </div>
    );
  }
}
export default Pesquisa;