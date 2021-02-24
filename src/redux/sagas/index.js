import { all } from 'redux-saga/effects';
import { watchApiSaga } from './apiSaga';
import { watchLoginSaga } from './authSaga';
import { watchDefectsSaga } from './defectsSaga';

export default function* rootSaga() {
  yield all([watchLoginSaga(), watchApiSaga(), watchDefectsSaga()]);
}
