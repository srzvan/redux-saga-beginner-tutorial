import { all, put, takeEvery, call } from 'redux-saga/effects';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* helloWorld() {
  console.log('Hello world of sagas!');
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSage() {
  yield all([helloWorld(), watchIncrementAsync()]);
}
