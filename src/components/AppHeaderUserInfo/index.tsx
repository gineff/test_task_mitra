import { FC, HTMLAttributes } from 'react'
import { Form, Row } from 'react-bootstrap'
import classnames from 'classnames'
import './AppHeaderUserInfo.scss'

type UserInfoProps = HTMLAttributes<HTMLElement> & {
  name: string
  email: string
  className?: string
}

const AppHeaderUserInfo: FC<UserInfoProps> = ({
  name,
  email,
  className: cls,
  ...attr
}) => {
  return (
    <>
      <div className={classnames('user-info ms-4 h-100 w-50', cls)} {...attr}>
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
