import { put } from 'redux-saga/effects';
import { getDefects } from '../slices/defectsSlice';

export function* launchSaga() {
  yield put(getDefects());
}
