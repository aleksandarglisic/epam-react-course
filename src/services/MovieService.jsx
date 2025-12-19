import ApiService from "./ApiService"

const ENDPOINTS = {
    GET_MOVIES: `/movies`
}

class MovieService extends ApiService {
    getMovies = (params = {}, config = {}) => {
        return this.apiClient.get(ENDPOINTS.GET_MOVIES, { params, ...config })
    }
}

export default new MovieService()

