import { FC, HTMLAttributes } from 'react'
import { Form, Row } from 'react-bootstrap'

type UserInfoProps = HTMLAttributes<HTMLElement> & {
  name: string
  email: string
}

const AppHeaderUserInfo: FC<UserInfoProps> = ({ name, email }) => {
  return (
    <>
      <div className="user-info ms-4 h-100">
        <Row className="user-info__name flex-nowrap">
          <Form.Label>name:</Form.Label>
          <span className="d-inline-flex fs-6 fw-bold">{name}</span>
        </Row>
        <Row className="user-info__email flex-nowrap">
          <Form.Label>email:</Form.Label>
          <span className="d-inline-flex fs-6 fw-bold">{email}</span>
        </Row>
      </div>
    </>
  )
}

export { AppHeaderUserInfo }
