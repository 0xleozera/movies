import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../../actions';

import Header from '../../../support/header';
import Loadable from '../../../support/loadable';
import Poster from '../../../support/poster';
import If from '../../../support/if';

import styles from './styles';

class Home extends Component {
  state = {
    loading: false,
    search: ''
  }

  search = async (search) => {
    this.setState({ loading: true, search });

    await this.props.fetchMovies(search);

    this.setState({ loading: false });
  }

  renderMovies = () => {
    const { movies, status } = this.props;
    const { search } = this.state;

    const mapMovies = movies.Search || [];

    return (
      <Fragment>
        <If test={search === ''}>
          <div className="search">
            <h4>Digite um filme para buscar</h4>
          </div>
        </If>

        <If test={search !== '' && mapMovies.length === 0 && !status}>
          <div className="no-results">
            <h4>Não foram encontrados resultados para {search}</h4>
          </div>
        </If>

        <If test={movies && movies.Search && status}>
          { mapMovies.map(movie => <Poster key={movie.imdbID} movie={movie} />) }
        </If>
      </Fragment>
    )
  }

  renderSearch = () => {
    const { movies } = this.props;
    const { search, loading } = this.state;

    return (
      <If test={search !== '' && movies && movies.Search && !loading}>
        <h2 className="search">{search}</h2>
      </If>
    )
  }

  render() {
    const { className } = this.props;
    const { loading } = this.state

    return (
      <Loadable loading={loading} className={className}>
        <div className="wrapper">
          <Header search={(search) => this.search(search)}/>

          { this.renderSearch() }

          <section className="container">
            { this.renderMovies() }
          </section>
        </div>
      </Loadable>
    )
  }
}

const mapStateToProps = ({ movies }) => ({ movies: movies.moviesFound, status: movies.moviesFound.Response === "False" ? false : true });
const mapDispatchToProps = (dispatch) => ({ fetchMovies: (search) => dispatch(fetchMovies(search)) });

export default connect(mapStateToProps, mapDispatchToProps)(styles(Home));
