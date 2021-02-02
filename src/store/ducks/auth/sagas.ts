import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loginRequest, logout, loginSuccess, loginFailed } from './actions';
import ToastAnimated, { showToast } from '../../../components/Toast/index';


export function* loginFunc(requestObj: any) {
    try{
        const loginObj = requestObj.payload.data;
        const response = yield call(api.post, `user/login`, loginObj);

        yield put(loginSuccess(response.data));

        //@ts-ignore
        if(response.data.valid){
            showToast({type: 'success', message: "Login efetuado!"});
        } else {
            showToast({type: 'error', message: "Login inválido!"});
        }

    } catch (err) {
        yield put(loginFailed());
        showToast({type: 'error', message: "Falha no Login!"});
    };    
}