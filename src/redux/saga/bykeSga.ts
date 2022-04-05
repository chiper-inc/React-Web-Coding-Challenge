import { call, put, takeEvery } from 'redux-saga/effects';
import ActionsTypes from "../actions/actiontypes";

import { Action, getBykesFailed, setBykes } from "../actions";

import * as Api from "../../Api";

/**
 * @description generator function for handle response of request{getApi}
 * when fired on FETCH_BYKES
 * @param action
 */
export function * fetchBykes (action: Action) {
  try {
    // @ts-ignore
    const bykes = yield call(Api.getApi, action.payload);
    yield put(setBykes(bykes));
  } catch ({ message }) {
    yield put(getBykesFailed(message));
  }
}

/**
 * @description  listen function on FETCH_BYKES to start the job of getting bykes
 */
function * bykeSaga () {
  yield takeEvery(ActionsTypes.FETCH_BYKES, fetchBykes);
}

export default bykeSaga;
