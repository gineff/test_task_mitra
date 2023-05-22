import { all } from 'redux-saga/effects'
import { currentUserSaga } from '@store/slices/currentUser'
import { postsSaga } from '@store/slices/posts'

export function* rootSaga() {
  yield all([currentUserSaga(), postsSaga()])
}
