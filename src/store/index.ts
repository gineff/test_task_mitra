import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import postsSlice from '@store/slices/posts'
import currentUserSlice from '@store/slices/currentUser'
import { postsInitialState } from '@constants/posts'
import { currentUserInitialState } from '@constants/currentUser'
import { rootSaga } from '@store/saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    posts: postsSlice,
  },
  preloadedState: {
    currentUser: currentUserInitialState,
    posts: postsInitialState,
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
