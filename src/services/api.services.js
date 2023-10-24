import axios from "axios";

const baseURL = "http://localhost:8000";

export default class ApiService {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL,
        });
    }

    async getRequest(path) {
        try {
            const response = await this.axiosInstance.get(path);
            return { data: response.data, status: response.status };
        } catch (error) {
            throw error;
        }
    }

    async postRequest(path, body) {
        try {
            const response = await this.axiosInstance.post(path, body);
            return { data: response.data, status: response.status };
        } catch (error) {
            throw error;
        }
    }

    async putRequest(path, body) {
        try {
            const response = await this.axiosInstance.put(path, body);
            return { data: response.data, status: response.status };
        } catch (error) {
            throw error;
        }
    }

    async deleteRequest(path) {
        try {
            const response = await this.axiosInstance.delete(path);
            return { data: response.data, status: response.status };
        } catch (error) {
            throw error;
        }
    }

    async studentLogin(email, password) {
        const path = '/student/login';
        const body = { email, password };

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async adminLogin(email, password) {
        const path = '/admin/login';
        const body = { email, password };

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async tutorLogin(email, password) {
        const path = '/admin/login';
        const body = { email, password };

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }
}

