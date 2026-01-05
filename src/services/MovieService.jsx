import ApiService from "./ApiService"

const ENDPOINTS = {
    GET_MOVIES: `/movies`,
    GET_MOVIE: (id) => `/movies/${id}`,
    ADD_MOVIE: `/movies`,
    EDIT_MOVIE: `/movies`
}

class MovieService extends ApiService {
    getMovies = (params = {}, config = {}) => {
        return this.apiClient.get(ENDPOINTS.GET_MOVIES, { params, ...config })
    }

    getMovie = (movieId, config = {}) => {
        return this.apiClient.get(ENDPOINTS.GET_MOVIE(movieId), config)
    }

    addMovie = (movie) => {
        return this.apiClient.post(ENDPOINTS.ADD_MOVIE, movie)
    }

    editMovie = (movie) => {
        return this.apiClient.put(ENDPOINTS.EDIT_MOVIE, movie)
    }
}

export default new MovieService()

