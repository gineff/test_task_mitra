import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadingStatus } from '@constants/index'
import { Post, User, postsInitialState } from '@constants/posts'
import { call, put, takeEvery } from 'redux-saga/effects'
import usersApi from 'api/usersApi'
import postsApi from 'api/postsApi'

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    fetchPosts(state) {
      state.loadingStatus = LoadingStatus.Loading
    },
    fetchPostsSuccess(state, action: PayloadAction<Post[]>) {
      state.data = action.payload
      state.loadingStatus = LoadingStatus.Succeeded
    },
    fetchPostsFailure(state) {
      state.data = []
      state.loadingStatus = LoadingStatus.Failed
    },
  },
})

function* fetchPostsSaga() {
  try {
    const purePosts: Post[] = yield call(postsApi.fetchPosts)
    const users: User[] = yield call(usersApi.fetchUsers)

    const usersMap = new Map(users.map((user: User) => [user.id, user]))
    const posts = purePosts.map(post => ({
      ...post,
      user: usersMap.get(post.userId),
    }))
    yield put(fetchPostsSuccess(posts))
  } catch (error) {
    yield put(fetchPostsFailure())
  }
}

export function* postsSaga() {
  yield takeEvery(fetchPosts.type, fetchPostsSaga)
}

export const { fetchPosts, fetchPostsSuccess, fetchPostsFailure } =
  postsSlice.actions

export default postsSlice.reducer
