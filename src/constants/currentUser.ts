import { LoadingStatus } from '@constants/index'

export enum Logged {
  In = 'In',
  Out = 'Out',
}

export type CurrentUser = {
  name: string
  email: string
  avatar?: string
  about?: string
}

export type CurrentUserSlice = {
  loadingStatus: LoadingStatus
  loginStatus: Logged
  data: CurrentUser
}

export const currentUserInitialState: CurrentUserSlice = {
  loadingStatus: LoadingStatus.Idle,
  loginStatus: Logged.Out,
  data: {
    name: '',
    email: '',
    about: '',
    avatar: 'https://cdn-icons-png.flaticon.com/512/5953/5953714.png',
  },
}
