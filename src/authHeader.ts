import axios from 'axios';
import { call } from "redux-saga/effects";

import api from './services/api';

export default function authHeaders() {
    let token = localStorage.getItem('token')
  
    if(token) {
      axios.post('http://127.0.0.1:8000/api/auth/token', {access_token:token}).then(response => {
        return response
      }).catch(error => {
        console.log(error)
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        window.location.reload()
      })
    }
  }

export function* sagaAuthHeaders() {
    let token = null;

    try {
        if(localStorage.getItem('token')) {
            token = localStorage.getItem('token');

            const auth = yield call(api.post,'auth/token',{access_token: token});

            return auth;
        }

    } catch (e) {
        console.log(e)
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload()
        return null
    }    
}
