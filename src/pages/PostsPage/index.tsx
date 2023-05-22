import { LoadingStatus } from '@constants/index'
import { useAppDispatch, useAppSelector } from '@hooks/redux_typed_hooks'
import { selectPosts } from '@store/selectors'
import { fetchPosts } from '@store/slices/posts'
import { withTemplate } from '@hoc/withTemplate'
import { useEffect, useMemo } from 'react'
import { Spinner } from 'react-bootstrap'
import { PostsList } from '@components/PostsList'
import { Post as PostType } from '@constants/posts'

const PostsPage = withTemplate((): JSX.Element => {
  const dispatch = useAppDispatch()
  const { loadingStatus, data: posts } = useAppSelector(selectPosts)
  const isLoading = useMemo(
    () => loadingStatus === LoadingStatus.Loading,
    [loadingStatus]
  )

  useEffect(() => {
    const isPostsEmpty = !posts.length
    if (isPostsEmpty) {
      dispatch(fetchPosts())
    }
  }, [posts])

  if (isLoading) {
    return <Spinner animation="grow" variant="light" className="m-4 p-4" />
  }

  if (loadingStatus === LoadingStatus.Failed) {
    return <span>Ошибка загрузки</span>
  }

  return (
    <div className="post-page__posts p-4">
      <PostsList posts={posts} />
    </div>
  )
})

export { PostsPage }
