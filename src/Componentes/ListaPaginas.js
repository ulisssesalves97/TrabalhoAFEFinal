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
                className="grid__button"
                onClick={() => props.Navegar && props.Navegar(1)}
              >
                Primeira
              </button>
            </li>
          )}
          {props.paginaAtual > 3 && (
            <li className="grid__item">
              <button disabled className="grid__button nav-pages__button--disabled">
                ...
              </button>
            </li>
          )}
          {props.paginaAtual > 2 && (
            <li className="grid__item">
              <button
                className="grid__button"
                onClick={() =>
                  props.Navegar && props.Navegar(props.paginaAtual - 1)
                }
              >
                Anterior
              </button>
            </li>
          )}
          <li className="grid__item">
            <button className="grid__button nav-pages__button--disabled" disabled>
              {props.paginaAtual}
            </button>
          </li>
          {props.paginaAtual + 1 < props.quantidadePaginas && (
            <li className="grid__item">
              <button
                className="grid__button"
                onClick={() =>
                  props.Navegar && props.Navegar(props.paginaAtual + 1)
                }
              >
                Próxima
              </button>
            </li>
          )}
          {props.paginaAtual + 2 < props.quantidadePaginas && (
            <li className="grid__item">
              <button disabled className="grid__button nav-pages__button--disabled">
                ...
              </button>
            </li>
          )}
          {props.paginaAtual < props.quantidadePaginas && (
            <li className="grid__item">
              <button
                className="grid__button"
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
