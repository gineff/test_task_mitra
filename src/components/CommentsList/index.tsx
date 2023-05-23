import { FC, HTMLAttributes, useEffect, useMemo } from 'react'
import { CommentItem } from '@components/CommentItem'
import { PostComment } from '@constants/comments'
import { LoadingStatus } from '@constants/index'
import { useAppDispatch, useAppSelector } from '@hooks/redux_typed_hooks'
import { fetchComments } from '@store/slices/comments'
import { selectComments } from '@store/selectors'
import { Spinner } from 'react-bootstrap'

type CommentItemProps = HTMLAttributes<HTMLElement> & {
  postId: number
}

const CommentList: FC<CommentItemProps> = ({ postId }) => {
  const dispatch = useAppDispatch()
  const { loadingStatus, data: comments } = useAppSelector(selectComments)
  const commentsByPostId = comments[postId]
  const isCommentsFetched = !!commentsByPostId
  const isLoading = useMemo(
    () => loadingStatus === LoadingStatus.Loading,
    [loadingStatus]
  )
  const isHasError = useMemo(
    () => loadingStatus === LoadingStatus.Failed,
    [loadingStatus]
  )

  useEffect(() => {
    if (!isCommentsFetched) {
      dispatch(fetchComments(postId))
    }
  }, [comments])

  if (isLoading && !isCommentsFetched) {
    return <Spinner animation="grow" variant="dark" className="m-4 p-4" />
  }
  if (isHasError) {
    return <span>Ошибка загрузки комментариев</span>
  }

  return (
    <div className="comments-list p-2">
      {commentsByPostId?.map((comment: PostComment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  )
}

export default CommentList
