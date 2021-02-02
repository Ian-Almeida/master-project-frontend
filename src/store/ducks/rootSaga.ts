import { all } from 'redux-saga/effects';

import * as Eff from 'redux-saga/effects'

const takeEvery: any = Eff.takeEvery;
const takeLatest: any = Eff.takeLatest;

import { UsersTypes } from './users/types';
import { LoginTypes } from './auth/types';

import { loadAll, create } from './users/sagas';
import { loginFunc } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(UsersTypes.GET_USERS_REQUEST, loadAll),
    takeLatest(LoginTypes.LOGIN, loginFunc),
    takeLatest(UsersTypes.CREATE_USER_REQUEST, create),
  ])
}
