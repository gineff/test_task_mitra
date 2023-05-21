import { all } from 'redux-saga/effects'
import { currentUserSaga } from '@store/slices/currentUser'
import { usersSaga } from '@store/slices/users'

export function* rootSaga() {
  yield all([currentUserSaga(), usersSaga()])
}
