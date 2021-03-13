import { put } from 'redux-saga/effects';
import { getDefects } from '../slices/defectsSlice';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();
export function* launchSaga() {
  //TODO: connect the saga with the router to dispatch actions and make api calls on page load

  yield put(getDefects());
}
