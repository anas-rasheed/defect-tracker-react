import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
const baseServerURL = 'http://localhost:5000/';

const apiCall = async ({ url, method, data }) =>
  await axios.request({
    baseURL: baseServerURL,
    url: url,
    method: method,
    data: data,
  });

function* apiSaga(action) {
  const { url, method, onSuccess, onError, data } = action.payload;
  let options = {
    baseURL: baseServerURL,
    url: url,
    method: method,
  };
  if (data) {
    options = { ...options, data: data };
  }
  try {
    const response = yield call(apiCall, options);
    if (onSuccess)
      yield put({
        type: onSuccess,
        payload: response,
      });
  } catch (error) {
    if (onError) yield put({ type: onError, payload: error });
  }
}

export function* watchApiSaga() {
  yield takeEvery(actions.api.type, apiSaga);
}
