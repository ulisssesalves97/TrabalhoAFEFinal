import React from "react";

class HeroiDetalheLista extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var lista = this.props.lista;
    var descricaoKey = this.props.descricaoKey;
    var urlKey = this.props.urlKey;
    var titulo = this.props.titulo;
    if (lista.length <= 0) {
      return null;
    }
    return (
      <div>
        <h4>{titulo}</h4>
        <ul className="grid heroi-grid">
          {lista.map((item) => (
            <li className="grid__item">
              <button
                className="grid__button"
                onClick={() =>
                  alert(`Em construção, navegar para ${item[urlKey]}`)
                }
              >
                {item[descricaoKey]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HeroiDetalheLista;
