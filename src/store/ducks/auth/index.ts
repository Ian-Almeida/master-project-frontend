import { Reducer } from 'redux';
import { LoginState, LoginTypes } from './types';

const INITIAL_LOGIN_STATE: LoginState = {
  data: [],
  isAuthUser: false,
  loading: false,
  error: false,
  authKey: {access_token:''},
}

export const loginReducer: Reducer<LoginState> = (state = INITIAL_LOGIN_STATE, action) => {
    switch (action.type) {
      case LoginTypes.LOGOUT:
        return {
          ...state,
        }; 
      case LoginTypes.LOGIN:
        return {
          ...state, loading: true, error: false,
        }
      case LoginTypes.LOGIN_SUCCESS:
        return {
          ...state, error: false, loading: false, data: action.payload.data, isAuthUser: true
        }
      case LoginTypes.LOGIN_FAILED:
        return {
          ...state, loading: false, error: true, data: [],
        }
      default:
        return state;
    }
  };