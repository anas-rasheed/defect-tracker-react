import { all } from 'redux-saga/effects';
import { watchApiSaga } from './apiSaga';
import { watchLoginSaga } from './authSaga';

export default function* rootSaga() {
  yield all([watchLoginSaga(), watchApiSaga()]);
}
