import { put, takeLatest } from 'redux-saga/effects';
import { login, logout } from '../slices/authSlice';

export function* loginSaga({ payload }) {
  if (payload.status === 201) {
    yield put(login());
  } else {
    yield put(logout());
  }
}

export function* watchLoginSaga() {
  yield takeLatest('apiSuccess/login', loginSaga);
}
