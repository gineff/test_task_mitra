import { Post as PostType } from '@constants/posts'
import { FC, HTMLAttributes } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { dummyAvatar } from '@constants/index'
import './PostItem.scss'

type PostProps = Omit<HTMLAttributes<HTMLElement>, 'id'> &
  PostType & { showAvatar: boolean }

const PostItem: FC<PostProps> = ({ title, body, userId, showAvatar, user }) => {
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
        <Button className="post__comment-btn">Показать комментарии</Button>
      </Card.Body>
    </Card>
  )
}

export { PostItem }
