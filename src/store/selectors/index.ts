import type { RootState } from '@store/index'

export const selectCurretnUser = (state: RootState) => state.currentUser
export const selectPosts = (state: RootState) => state.posts
