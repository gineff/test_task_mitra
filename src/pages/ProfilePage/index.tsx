import { DefaultPageTmpl } from '@components/DefaultPageTmpl'
import { Container, Navbar } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { LoadingStatus } from '@constants/index'
import { useAppDispatch, useAppSelector } from '@hooks/redux_typed_hooks'
import { selectPosts } from '@store/selectors'
import { fetchPosts } from '@store/slices/posts'
import { useEffect, useMemo } from 'react'
import { Spinner } from 'react-bootstrap'
import { PostsList } from '@components/PostsList'
import './ProfilePage.scss'
import { Post as PostType } from '@constants/posts'
import { Avatar } from '@components/Avatar'
import { AppHeaderUserInfo } from '@components/AppHeaderUserInfo'
import { dummyAvatar } from '@constants/index'

const ProfilePage = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { loadingStatus, data: posts } = useAppSelector(selectPosts)
  const isLoading = useMemo(
    () => loadingStatus === LoadingStatus.Loading,
    [loadingStatus]
  )
  const isHasError = useMemo(
    () => loadingStatus === LoadingStatus.Failed,
    [loadingStatus]
  )

  const filterPostsByUserId = (posts: PostType[], id: number) =>
    posts.filter(post => post.userId === id)

  useEffect(() => {
    const isPostsEmpty = !posts.length
    if (isPostsEmpty) {
      dispatch(fetchPosts())
    }
  }, [posts])

  const userPosts = filterPostsByUserId(posts, Number(id))
  const user = userPosts.at(0)?.user || { name: '', email: '' }
  const { name, email } = user

  const navBar = (
    <Container className="default-page-tmpl__wrapper button-back__container">
      <Navbar expand={false}>
        <Navbar.Toggle
          onClick={() => goBack()}
          className="button-back"></Navbar.Toggle>
      </Navbar>
    </Container>
  )

  return (
    <>
      {navBar}
      <DefaultPageTmpl showNav={false} className="profile-page">
        {isLoading ? (
          <Spinner animation="grow" variant="light" className="m-4 p-4" />
        ) : isHasError ? (
          <span>Ошибка загрузки</span>
        ) : (
          <>
            <Avatar
              size="large"
              variant="half-up"
              className="outline"
              image={dummyAvatar}
            />
            <AppHeaderUserInfo
              name={name}
              email={email}
              className="text-light"
            />
            <PostsList className="p-4" showAvatar={false} posts={userPosts} />
          </>
        )}
      </DefaultPageTmpl>
    </>
  )
}

export { ProfilePage }
