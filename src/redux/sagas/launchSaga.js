import { put } from 'redux-saga/effects';
import { getDefects } from '../slices/defectsSlice';

export function* launchSaga() {
  //TODO: connect the saga with the router to dispatch actions and make api calls on page load
  if (window.location.href === 'http://localhost:3000/') {
    yield put(getDefects());
  }
}
