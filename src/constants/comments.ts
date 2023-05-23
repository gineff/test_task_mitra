import { LoadingStatus } from '@constants/index'

type PostId = number

export type PostComment = {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

type ComemntSlice = {
  loadingStatus: LoadingStatus
  data: Record<PostId, PostComment[]>
}

export const commentsInitialState: ComemntSlice = {
  loadingStatus: LoadingStatus.Idle,
  data: {},
}
