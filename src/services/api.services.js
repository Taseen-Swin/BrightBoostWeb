import axios from "axios";

const baseURL = "http://localhost:8000";

class ApiService {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL,
        });
    }

    async getRequest(path) {
        try {
            const response = await this.axiosInstance.get(path);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async postRequest(path, body) {
        try {
            const response = await this.axiosInstance.post(path, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async putRequest(path, body) {
        try {
            const response = await this.axiosInstance.put(path, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async deleteRequest(path) {
        try {
            const response = await this.axiosInstance.delete(path);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async studentLogin(email, password) {
        const path = '/student/login';
        const body = { email, password };

        try {
            return await this.postRequest(path, body);
        } catch (error) {
            throw error;
        }
    }
}

export default new ApiService();
