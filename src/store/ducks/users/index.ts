import { Reducer } from 'redux';
import { UserState, UsersTypes } from './types';

const INITIAL_USER_STATE: UserState = {
  data: [],
  error: false,
  loading: false,
};

export const userReducer: Reducer<UserState> = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case UsersTypes.GET_USERS_REQUEST:
      return {
        ...state, loading: true,
      };
    case UsersTypes.GET_USERS_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case UsersTypes.GET_USERS_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
      }
    default:
      return state;
  }
};

export const createReducer: Reducer<UserState> = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case UsersTypes.CREATE_USER_REQUEST:
      return {
        ...state, loading: true,
      };
    case UsersTypes.CREATE_USER_SUCCESS:
      return {
        ...state, loading:false, data: action.payload.data,
      }
    case UsersTypes.CREATE_USER_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
      }
    default:
      return state;
  }
};