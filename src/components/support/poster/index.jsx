import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import renderImage from '../../../util/render-image';
import styles from './styles';

class Poster extends Component {
  render() {
    const { movie, className } = this.props;

    return (
      <div className={className}>
        <div className="poster">
          <Link to={`/details/${movie.imdbID}`}>
            <figure>
              { renderImage(movie.Poster, movie.Title, true) }
            </figure>
            <div className="movie-name">
              <p>
                { movie.Title }
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default styles(Poster);
