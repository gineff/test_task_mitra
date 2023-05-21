import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadingStatus } from '@constants/index'
import {
  Logged,
  CurrentUser,
  currentUserInitialState,
} from '@constants/currentUser'
import { call, put, takeEvery } from 'redux-saga/effects'
import currentUserApi from 'api/currentUserApi'

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: currentUserInitialState,
  reducers: {
    fetchCurrentUser(state) {
      state.loadingStatus = LoadingStatus.Loading
    },
    fetchCurrentUserSuccess(state, action: PayloadAction<CurrentUser>) {
      state.data = action.payload
      state.loginStatus = Logged.In
      state.loadingStatus = LoadingStatus.Succeeded
    },
    fetchCurrentUserFailure(state) {
      state.loadingStatus = LoadingStatus.Failed
      state.loginStatus = Logged.Out
    },
  },
})

function* fetchCurrentUserSaga() {
  try {
    const user: CurrentUser = yield call(currentUserApi.fetchCurrentUser)
    yield put(fetchCurrentUserSuccess(user))
  } catch (error) {
    yield put(fetchCurrentUserFailure())
  }
}

export function* currentUserSaga() {
  yield takeEvery(fetchCurrentUser.type, fetchCurrentUserSaga)
}

export const {
  fetchCurrentUser,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
} = currentUserSlice.actions

export default currentUserSlice.reducer
