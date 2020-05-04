import { FETCH_COMPLETED_SAGA } from '../constants/project';

export function fetchCompletedAction(payload) {
  console.log('action...')
  return {
    type: FETCH_COMPLETED_SAGA,
    payload,
  }
}