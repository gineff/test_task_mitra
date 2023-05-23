import { Post as PostType } from '@constants/posts'
import { FC, HTMLAttributes, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { dummyAvatar } from '@constants/index'
import './PostItem.scss'
import { useLazyComponent } from '@hooks/useLazyComponent'

type PostProps = Omit<HTMLAttributes<HTMLElement>, 'id'> &
  PostType & { showAvatar: boolean }

const PostItem: FC<PostProps> = ({
  id,
  title,
  body,
  userId,
  showAvatar,
  user,
}) => {
  const LazyCommentsList: FC<{ postId: number }> = useLazyComponent(
    () => import('@components/CommentsList')
  )
  const [isCommentsVisible, setCommentsVisible] = useState(false)

  const handleButtonClick = () => setCommentsVisible(!isCommentsVisible)

  return (
    <Card className="post my-3">
      {showAvatar ? (
        <Card.Header className="post__header">
          <Link to={`/profile/${userId}`}>
            <Card.Img
              src={(user && user.avatar) || dummyAvatar}
              className="post__avatar"
            />
          </Link>
        </Card.Header>
      ) : null}
      <Card.Body className="post__body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button onClick={handleButtonClick} className="post__comment-btn">
          {isCommentsVisible ? 'Скрыть комментарии' : 'Показать комментарии'}
        </Button>
        {isCommentsVisible ? (
          <div className="post__comments">
            <LazyCommentsList postId={id} />
          </div>
        ) : null}
      </Card.Body>
    </Card>
  )
}

export { PostItem }
