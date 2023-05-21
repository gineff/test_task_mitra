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
  avatar: string
}

export type UsersSlice = {
  loadingStatus: LoadingStatus
  data: User[]
}

export const usersInitialState: UsersSlice = {
  loadingStatus: LoadingStatus.Idle,
  data: [],
}
