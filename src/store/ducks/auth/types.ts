import { IUser } from "../users/types";

export enum LoginTypes {

    LOGIN = '@auth/LOGIN',
    LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
    LOGIN_FAILED = '@auth/LOGIN_FAILED',

    LOGOUT = '@auth/LOGOUT',
}

export interface LoginState {
    readonly data: IUser[],
    readonly isAuthUser: boolean,
    readonly loading: boolean,
    readonly error: boolean,
    readonly authKey?: {access_token:string},
}