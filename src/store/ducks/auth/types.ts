export enum LoginTypes {

    LOGIN = '@auth/LOGIN',
    LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
    LOGIN_FAILED = '@auth/LOGIN_FAILED',

    LOGOUT = '@auth/LOGOUT',
}

export interface ILogin {
    email: string,
    password: string,
}

export interface LoginState {
    readonly data: ILogin,
    readonly loading: boolean,
    readonly error: boolean
}