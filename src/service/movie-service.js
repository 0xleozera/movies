import BaseService from './base-service';

class MovieService extends BaseService {
  searchMovies = async (search) => await this.get(`/?s=${search}&apikey=${this.getApiKey()}`);

  searchMovieById = async (id) => await this.get(`/?i=${id}&apikey=${this.getApiKey()}`);
}

export default new MovieService();
