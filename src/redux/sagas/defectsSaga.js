import { put, takeLatest } from 'redux-saga/effects';
import { defectsList } from '../slices/defectsSlice';

export function* defectsSaga({ payload }) {
  yield put(defectsList(payload));
}

export function* testSaga({ payload }) {
  yield console.log(payload);
}
export function* watchDefectsSaga() {
  yield takeLatest('apiSuccess/fetchDefects', defectsSaga);
  yield takeLatest('apiSuccess/addDefect', testSaga);
}
