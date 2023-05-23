import { FC, HTMLAttributes } from 'react'
import { PostComment } from '@constants/comments'
import { Card } from 'react-bootstrap'
import './CommentItem.scss'

type CommentProps = Omit<HTMLAttributes<HTMLElement>, 'id'> & PostComment

const CommentItem: FC<CommentProps> = ({ email, body }) => {
  return (
    <Card className="m-2 p-2 comment-item">
      <Card.Title>&#128100; {email}:</Card.Title>
      <Card.Text>{body}</Card.Text>
    </Card>
  )
}

export { CommentItem }
