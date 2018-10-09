import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchMovieDetails } from '../../actions';
import renderImage from '../../../../util/render-image';

import Loadable from '../../../support/loadable';
import If from '../../../support/if';

import { filled, heart, close } from '../../../../assets/images';

import styles from './styles';

class Details extends Component {
  state = {
    loading: false
  }

  componentWillMount = async () => {
    this.setState({ loading: true });

    await this.props.movieDetails(this.props.match.params.id);

    this.setState({ loading: false });
  }

  renderStars = (imdbRating) => {
		const stars = Math.floor(imdbRating / 2);
		const starsArray = [];

		for (let i = 0; i < stars; i++) {
			starsArray.push(<img src={filled} alt="Avaliação positiva" key={`filledstar${i}`} />);
		}

		for (let i = 0; i < 5 - stars; i++) {
			starsArray.push(<img src={heart} alt="Avaliação negativa" key={`heartstar${i}`} />);
		}

		return starsArray;
	}

  render() {
    const { loading, currentMovie, className } = this.props;
    const current = currentMovie || {};

    return (
      <Loadable loading={loading} className={className}>
        <If test={current}>
          <div className="movie-details">
            <figure className="movie-poster">
              { renderImage(current.Poster || '', current.Title, false) }
            </figure>

            <div className="container">
              <h1 className="title">{current.Title}</h1>

              <div className="details">
                <If test={current.Year !== 'N/A'}><span>{current.Year}</span></If>
                <If test={current.Runtime !== 'N/A'}><span>{current.Runtime}</span></If>
                <If test={current.Genre !== 'N/A'}><span>{current.Genre}</span></If>
              </div>

              <div className="rating">
                {this.renderStars(current.imdbRating)}
                <span>
                  {current.imdbRating} / 10
                </span>
              </div>

              <If test={current.Plot !== 'N/A'}>
                <div className="synopsis">
                  <h3>Sinopse</h3>
                  <p>{current.Plot}</p>
                </div>
              </If>

              <div className="back">
                <Link to="/" className="back-icon">
                  <img src={close} alt="Voltar" />
                </Link>
                <Link to="/">Voltar</Link>
              </div>
            </div>
          </div>
        </If>
      </Loadable>
    )
  }
}

const mapStateToProps = ({ movies }) => ({ currentMovie: movies.movieDetails });
const mapDispatchToProps = (dispatch) => ({ movieDetails: (id) => dispatch(fetchMovieDetails(id)) });

export default connect(mapStateToProps, mapDispatchToProps)(styles(Details));
