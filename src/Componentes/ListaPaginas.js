import React from "react";

class NavegacaoPaginas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var props = this.props;
    if (props.quantidadePaginas < 2) {
      return null;
    }
    return (
      <div className="nav-pages">
        <ul className="grid">
          {props.paginaAtual > 1 && (
            <li className="grid__item">
              <button
                onClick={() =>
                  props.Navegar && props.Navegar(1)
                }
              >
                Primeira
              </button>
            </li>
          )}
          {props.paginaAtual > 2 && (
            <li className="grid__item">
              <button
                onClick={() =>
                  props.Navegar && props.Navegar(props.paginaAtual - 1)
                }
              >
                {props.paginaAtual - 1}
              </button>
            </li>
          )}
          <li className="grid__item">{props.paginaAtual}</li>
          {props.paginaAtual + 1 < props.quantidadePaginas && (
            <li className="grid__item">
              <button
                onClick={() =>
                  props.Navegar && props.Navegar(props.paginaAtual + 1)
                }
              >
                {props.paginaAtual + 1}
              </button>
            </li>
          )}
          {props.paginaAtual < props.quantidadePaginas && (
            <li className="grid__item">
              <button
                onClick={() =>
                  props.Navegar && props.Navegar(props.quantidadePaginas)
                }
              >
                Ultimo
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

class ListaPaginas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="paginas">
        <NavegacaoPaginas {...this.props} />
        {this.props.children}
        <NavegacaoPaginas {...this.props} />
      </div>
    );
  }
}

export default ListaPaginas;
