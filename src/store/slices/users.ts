import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadingStatus } from '@constants/index'
import { User, usersInitialState } from '@constants/users'
import { call, put, takeEvery } from 'redux-saga/effects'
import usersApi from 'api/usersApi'

const userSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchUsers(state, _action: PayloadAction<number>) {
      state.loadingStatus = LoadingStatus.Loading
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.data = action.payload
      state.loadingStatus = LoadingStatus.Succeeded
    },
    fetchUsersFailure(state) {
      state.data = []
      state.loadingStatus = LoadingStatus.Failed
    },
  },
})

function* fetchUsersSaga() {
  try {
    const users: User[] = yield call(usersApi.fetchUsers)
    yield put(fetchUsersSuccess(users))
  } catch (error) {
    yield put(fetchUsersFailure())
  }
}

export function* usersSaga() {
  yield takeEvery(fetchUsers.type, fetchUsersSaga)
}

export const { fetchUsers, fetchUsersSuccess, fetchUsersFailure } =
  userSlice.actions

export default userSlice.reducer
