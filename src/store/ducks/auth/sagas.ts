import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { logout, loginSuccess, loginFailed } from './actions';
import ToastAnimated, { showToast } from '../../../components/Toast/index';
import store from '../..';

export function* loginFunc(requestObj: any) {
    try{
        const loginObj = requestObj.payload.data[0];
        const response = yield call(api.post, `user/login`, loginObj);
        
        yield put(loginSuccess(response.data));
        
        //@ts-ignore
        if(response.data[0].valid){
            showToast({type: 'success', message: "Login efetuado!"});
        } else {
            showToast({type: 'error', message: "Login inválido!"});
        }

    } catch (err) {
        yield put(loginFailed());
        showToast({type: 'error', message: "Falha no Login!"});
    };    
}