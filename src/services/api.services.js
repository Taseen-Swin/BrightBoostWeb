import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8000";


export default class Apiservices {

    constructor() {

    }

    getRequest(path) {
        axios.get(`${baseURL}/${path}`).then((response) => {
            return response;
        });
    }

    postRequest(path, body) {
        axios
            .post(`${baseURL}/${path}`, body)
            .then((response) => {
                return response;
            });
    }

    putRequest(path, body) {
        axios
            .put(`${baseURL}/${path}`, body)
            .then((response) => {
                return response;
            });
    }

    deleteRequest(path, body) {
        axios
            .delete(`${baseURL}/${path}`)
            .then((response) => {
                return response;
            });
    }

    studentlogin(email, password) {
        path = '/student/login'
        body = { 'email': email, 'password': password }
        return this.postRequest(path, body);

    }


}