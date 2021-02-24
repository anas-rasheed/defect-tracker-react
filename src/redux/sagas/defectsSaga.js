import { put, takeLatest } from 'redux-saga/effects';
import { defectsList } from '../slices/defectsSlice';

export function* defectsSaga({ payload }) {
  yield put(defectsList(payload));
}

export function* watchDefectsSaga() {
  yield takeLatest('apiCallSuccess/fetchDefects', defectsSaga);
}
