import { takeLatest } from 'redux-saga/effects';
import { UPDATE_COMPLETED_SAGA } from '../constants/project';
// import rootNavigation from '../rootNavigation';

export function* updateCompleted(payload) {
  try {
    console.log('saga payload', payload)
  } catch (error) {
    console.log('error', error)
  }
}

export default function* projectSaga() {
  yield takeLatest(UPDATE_COMPLETED_SAGA, updateCompleted);
};
