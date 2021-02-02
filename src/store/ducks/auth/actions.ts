import { action } from 'typesafe-actions';
import { LoginTypes, ILogin } from './types';

export const loginRequest = (data: ILogin) => action(LoginTypes.LOGIN, { data });

export const loginSuccess = (data: ILogin) => action(LoginTypes.LOGIN_SUCCESS, { data });

export const loginFailed = () => action(LoginTypes.LOGIN_FAILED); 

export const logout = () => action(LoginTypes.LOGOUT);