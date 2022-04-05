import { all } from 'redux-saga/effects';
import bykeSaga from "./bykeSga";

export default function * rootSaga () {
  yield all([
    bykeSaga()
  ]);
}
