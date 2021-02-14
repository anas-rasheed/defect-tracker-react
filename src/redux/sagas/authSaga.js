import { put, call, takeLatest } from 'redux-saga/effects';
import { loginApiCall } from '../../api';
import { login, logout } from '../slices/authSlice';

export function* loginSaga(action) {
  const response = yield call(loginApiCall, action.payload);

  if (response.status === 201) {
    yield put(login());
  } else {
    yield put(logout());
  }
}

export function* watchLoginSaga() {
  yield takeLatest('LOGIN', loginSaga);
}
