import { FC, HTMLAttributes } from 'react'
import { Container } from 'react-bootstrap'
import classNames from 'classnames'
import { AppHeader } from '@components/AppHeader'

export type DefaultPageTmplProps = HTMLAttributes<HTMLElement> & {
  showNav?: boolean
}
const DefaultPageTmpl: FC<DefaultPageTmplProps> = ({
  showNav = true,
  children: content,
  className: cls,
  ...attrs
}) => {
  return (
    <div
      className={classNames('w-100 h-100 d-flex app-def-tpl', cls)}
      {...attrs}>
      <Container className="mx-auto app-def-tpl__wrapper">
        <AppHeader showNav={showNav} className="mb-2 mx-auto" />
        <main className="bg-light page-content">{content}</main>
      </Container>
    </div>
  )
}
export { DefaultPageTmpl }
