import { FC, HTMLAttributes } from 'react'
import { Container } from 'react-bootstrap'
import classNames from 'classnames'

export type DefaultPageTmplProps = HTMLAttributes<HTMLElement>

const DefaultPageTmpl: FC<DefaultPageTmplProps> = ({
  children: content,
  className: cls,
  ...attrs
}) => {
  return (
    <div
      className={classNames('w-100 h-100 d-flex app-def-tpl', cls)}
      {...attrs}>
      <Container className="mx-auto app-def-tpl__wrapper">
        <main className="bg-light page-content">{content}</main>
      </Container>
    </div>
  )
}
export { DefaultPageTmpl }
