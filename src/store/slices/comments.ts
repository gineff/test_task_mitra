/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadingStatus } from '@constants/index'
import { PostComment, commentsInitialState } from '@constants/comments'
import { call, put, takeEvery } from 'redux-saga/effects'
import commentsApi from 'api/commentsApi'

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsInitialState,
  reducers: {
    fetchComments(state, _action: PayloadAction<number>) {
      state.loadingStatus = LoadingStatus.Loading
    },
    fetchCommentsSuccess(
      state,
      {
        payload: { id, comments },
      }: PayloadAction<{ id: number; comments: PostComment[] }>
    ) {
      state.data[id] = comments
      state.loadingStatus = LoadingStatus.Succeeded
    },
    fetchCommentsFailure(state) {
      state.data = []
      state.loadingStatus = LoadingStatus.Failed
    },
  },
})

function* fetchCommentsSaga({ payload: id }: PayloadAction<number>) {
  try {
    const comments: PostComment[] = yield call(commentsApi.fetchComments, id)
    yield put(fetchCommentsSuccess({ id, comments }))
  } catch (error) {
    yield put(fetchCommentsFailure())
  }
}

export function* commentsSaga() {
  yield takeEvery(fetchComments.type, fetchCommentsSaga)
}

export const { fetchComments, fetchCommentsSuccess, fetchCommentsFailure } =
  commentsSlice.actions

export default commentsSlice.reducer
