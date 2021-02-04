import { action } from 'typesafe-actions';
import { IUser } from '../users/types';
import { LoginTypes } from './types';

export const loginRequest = (data: IUser[]) => action(LoginTypes.LOGIN, { data });

export const loginSuccess = (data: IUser[]) => action(LoginTypes.LOGIN_SUCCESS, { data });

export const loginFailed = () => action(LoginTypes.LOGIN_FAILED); 

export const logout = () => action(LoginTypes.LOGOUT);