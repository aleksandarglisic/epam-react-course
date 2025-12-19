import axios from "axios"
import config from "../config"

class HttpService {
    constructor(clientConfig = {}) {
        console.log('clientConfig', clientConfig)
        this.client = axios.create(clientConfig)

        this.initializeInterceptors()
    }

    initializeInterceptors() {
        this.client.interceptors.response.use(
            response => response,
            error => {
                if (axios.isCancel(error)) {
                    return Promise.reject(error)
                }

                if (error.name === "AbortError") {
                    return Promise.reject(error)
                }

                if (!error.response) {
                    console.error("Network error", error)
                    return Promise.reject(error)
                }

                return Promise.reject(error)
            }
        )
    }

    setHeader(key, value) {
        this.client.defaults.headers.common[key] = value
    }

    removeHeader(key) {
        delete this.client.defaults.headers.common[key]
    }
}

const clientConfig = {
    baseURL: config.API_BASE_URL,
}

export default new HttpService(clientConfig)
