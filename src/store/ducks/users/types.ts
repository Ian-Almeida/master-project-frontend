/**
 * Action Types
 */
export enum UsersTypes {
    CREATE_USER_REQUEST = '@users/CREATE_USER_REQUEST',
    CREATE_USER_SUCCESS = '@users/CREATE_USER_SUCCESS',
    CREATE_USER_FAILURE = '@users/CREATE_USER_FAILURE',

    // DELETE_USER_REQUEST = '@users/DELETE_USER_REQUEST',
    // DELETE_USER_SUCCESS = '@users/DELETE_USER_SUCCESS',
    // DELETE_USER_FAILURE = '@users/DELETE_USER_FAILURE',

    // UPDATE_USER_REQUEST = '@users/UPDATE_USER_REQUEST',
    // UPDATE_USER_SUCCESS = '@users/UPDATE_USER_SUCCESS',
    // UPDATE_USER_FAILURE = '@users/UPDATE_USER_FAILURE',

    GET_USERS_REQUEST = '@users/GET_USERS_REQUEST',
    GET_USERS_SUCCESS = '@users/GET_USERS_SUCCESS',
    GET_USERS_FAILURE = '@users/GET_USERS_FAILURE',

    // GET_USER_REQUEST = '@users/GET_USER_REQUEST',
    // GET_USER_SUCCESS = '@users/GET_USER_SUCCESS',
    // GET_USER_FAILURE = '@users/GET_USER_FAILURE',
}

/**
 * Data types
 */
export interface IUser {
    id: string,
    name: string,
    email: string,
    password: string,
    active: boolean
    isAuthUser: boolean
}

export interface IUserCreate {
    name: string,
    email: string,
    password: string,
    active: boolean,
}

// export interface IUserUpdate {
//     name?: string,
//     email?: string,
//     password?: string,
//     active?: boolean
// }

/**
 * State type
 */
export interface UserState {
     readonly data: IUser[],
     readonly loading: boolean,
     readonly error: boolean
}

export interface UserCreateState {
     readonly data: IUser[],
     readonly loading: boolean,
     readonly error: boolean,
 }

// export interface UserUpdateState {
//      readonly data: IUserUpdate,
//      readonly loading: boolean,
//      readonly error: boolean,
// }
