import axios from 'axios';
import React from 'react';
import {IUser, IUserCreate} from '../src/interfaces/user'
// import { getAllUserProfiles } from './store/actionCreators';

const api_url = 'http://127.0.0.1:8000/api/user'

function authHeaders(token: string) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    };
}

const API = {
    async createUser(user: IUserProfile) {
        return axios.post<IUserProfile>(`${api_url}/signup`, user);
    },
    async userLogin(email:string, password: string) {
        return axios.get(`${api_url}/login/${email}/${password}`);
    },
    async getAllUserProfiles() {
        return axios.get(`${api_url}/`);
    }
}

export default API;
