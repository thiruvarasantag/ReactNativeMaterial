import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from './actions';

function* fetchDataSaga(action) {
  try {
    const response = yield call(fetch, 'https://api.example.com/data');
    const data = yield call([response, 'json']);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchDataSaga);
}

export default rootSaga;