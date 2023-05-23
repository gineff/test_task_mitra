import { LoadingStatus } from '@constants/index'

type Geo = {
  lat: string
  lng: string
}

export type Company = {
  name: string
  catchPhrase: string
  bs: string
}

export type Adress = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: Adress
  phone: string
  website: string
  company: Company
  avatar?: string
}

export type Post = {
  id: number
  userId: number
  user?: User
  title: string
  body: string
}

type PostsSlice = {
  loadingStatus: LoadingStatus
  data: Post[]
}

export const postsInitialState: PostsSlice = {
  loadingStatus: LoadingStatus.Idle,
  data: [],
}
