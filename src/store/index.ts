import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from '@store/slices/users'
import currentUserSlice from '@store/slices/currentUser'
import { usersInitialState } from '@constants/users'
import { currentUserInitialState } from '@constants/currentUser'
import { rootSaga } from '@store/saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    users: userSlice,
  },
  preloadedState: {
    currentUser: currentUserInitialState,
    users: usersInitialState,
  },
  devTools: {
    name: 'The real McCoy',
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
  },
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
