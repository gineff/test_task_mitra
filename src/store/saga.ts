import { all } from 'redux-saga/effects'
import { currentUserSaga } from '@store/slices/currentUser'
import { postsSaga } from '@store/slices/posts'
import { commentsSaga } from '@store/slices/comments'

export function* rootSaga() {
  yield all([currentUserSaga(), postsSaga(), commentsSaga()])
}
