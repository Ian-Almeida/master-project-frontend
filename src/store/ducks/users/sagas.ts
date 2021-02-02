import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { getUsersFailure, getUsersSuccess } from './actions';
import { createUserFailure, createUserSuccess } from './actions';
// import { ILogin, IUserCreate } from './types';
import ToastAnimated, { showToast } from '../../../components/Toast/index';
import store from '../..';

export function* loadAll() {
    try {
        const response = yield call(api.get, 'user/');
        yield put(getUsersSuccess(response.data));    
                
    } catch (err) {
        
        yield put(getUsersFailure());
    }
}

export function* create(requestObj: any) {
    try {
        const user = requestObj.payload.data;
        const response = yield call(api.post, 'user/signup', user);
        yield put(createUserSuccess(response.data));
        
        //@ts-ignore
        if(store.getState().login.data.valid) {
            showToast({type: 'success', message: 'Usuário criado com sucesso!'});
        } else {
            showToast({type: 'error', message: 'Erro ao criar usuário!'});
        }

    } catch (err) {
        yield put(createUserFailure());
        showToast({type: 'error', message: 'Erro inesperado!'})
    }
}