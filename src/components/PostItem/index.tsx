import { Post as PostType } from '@constants/posts'
import { FC, HTMLAttributes } from 'react'
import { Card, Button } from 'react-bootstrap'
import './PostItem.scss'

type PostProps = Omit<HTMLAttributes<HTMLElement>, 'id'> & PostType

const PostItem: FC<PostProps> = ({ title, body }) => {
  return (
    <Card className="post my-3">
      <Card.Header className="post__header">
        <Card.Img
          src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
          className="post__avatar"
        />
      </Card.Header>
      <Card.Body className="post__body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button className="post__comment-btn">Показать комментарии</Button>
      </Card.Body>
    </Card>
  )
}

export { PostItem }
