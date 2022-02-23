import { all, put, takeEvery } from 'redux-saga/effects';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* helloWorld() {
  console.log('Hello world of sagas!');
}

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSage() {
  yield all([helloWorld(), watchIncrementAsync()]);
}
