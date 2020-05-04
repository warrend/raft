import { takeLatest, all } from 'redux-saga/effects';
import { FETCH_COMPLETED_SAGA } from '../constants/project';
// import rootNavigation from '../rootNavigation';

function* updateCompleted(payload) {
  try {
    console.log('saga payload', payload)
  } catch (error) {
    console.log('error', error)
  }
}

function* projectSaga() {
  yield takeLatest(FETCH_COMPLETED_SAGA, updateCompleted);
};

export default function* rootSaga() {
  yield all([
    projectSaga(),
  ])
};
