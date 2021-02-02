import { action } from 'typesafe-actions';
import { UsersTypes, IUser, IUserCreate } from './types';

export const getUsersRequest = () => action(UsersTypes.GET_USERS_REQUEST);

export const getUsersSuccess = (data: IUser[]) => action(UsersTypes.GET_USERS_SUCCESS, { data });

export const getUsersFailure = () => action(UsersTypes.GET_USERS_FAILURE);

export const createUserRequest = (data: IUserCreate) => action(UsersTypes.CREATE_USER_REQUEST, { data });

export const createUserSuccess = (data: IUserCreate) => action(UsersTypes.CREATE_USER_SUCCESS, { data });

export const createUserFailure = () => action(UsersTypes.CREATE_USER_FAILURE);

// export const loginRequest = (data: ILogin) => action(UsersTypes.LOGIN_USER_REQUEST, { data });

// export const loginSuccess = (data: ILogin) => action(UsersTypes.LOGIN_USER_SUCCESS, { data });

// export const loginFailure = () => action(UsersTypes.LOGIN_USER_FAILURE);

