import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { logo, user, search, close } from '../../../assets/images';

import styles from './styles';

class Header extends Component {
  state = {
    search: ''
  }

  setSearch(event) {
    const search = event.target.value;
    this.setState({ search });
  }

  submitSearch(event) {
    event.preventDefault();

    this.props.search(this.state.search);
    this.toggleResponsiveForm();
  }

  toggleResponsiveForm() {
    const form = document.querySelector('.search-form form');
    form.classList.toggle('open');
  }

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <header>
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="search-form">
            <form onSubmit={(event) => this.submitSearch(event)}>
              <input
                type="text"
                placeholder="Que filme você procura?"
                onChange={(event) => this.setSearch(event)}
              />
              <button type="submit" className="search-movies">
                <img src={search} alt="Submit" />
              </button>
              <button
                type="button"
                className="close-form"
                onClick={() => this.toggleResponsiveForm()}>
                <img src={close} alt="Fechar" />
              </button>
            </form>

            <i className="responsive-search" onClick={() => this.toggleResponsiveForm()}>
              <img src={search} alt="Buscar" />
            </i>
          </div>

          <div className="user">
            <figure>
              <img src={user} alt="Avatar" />
            </figure>
            <div className="user-name">
              <p>Leonardo Pinheiro</p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default styles(Header);
