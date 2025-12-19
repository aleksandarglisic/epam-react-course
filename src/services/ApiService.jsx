import httpService from './HttpService';

class ApiService {
    constructor() {
        this.http = httpService;
        this.apiClient = httpService.client;
    }
}

export default ApiService;