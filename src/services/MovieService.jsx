import ApiService from "./ApiService"

const ENDPOINTS = {
    GET_MOVIES: `/movies`,
    GET_MOVIE: (id) => `/movies/${id}`
}

class MovieService extends ApiService {
    getMovies = (params = {}, config = {}) => {
        return this.apiClient.get(ENDPOINTS.GET_MOVIES, { params, ...config })
    }

    getMovie = (movieId, config = {}) => {
        return this.apiClient.get(ENDPOINTS.GET_MOVIE(movieId), config)
    }
}

export default new MovieService()

