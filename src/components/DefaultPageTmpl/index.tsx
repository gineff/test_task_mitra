import { FC, HTMLAttributes } from 'react'
import { Container } from 'react-bootstrap'
import classNames from 'classnames'
import { AppHeader } from '@components/AppHeader'
import './DefaultPageTmpl.scss'

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
      className={classNames('w-100 h-100 d-flex default-page-tmpl', cls)}
      {...attrs}>
      <Container className="mx-auto default-page-tmpl__wrapper">
        <AppHeader showNav={showNav} className="mb-2 mx-auto" />
        <main className="mt-4 default-page-tmpl__content">{content}</main>
      </Container>
    </div>
  )
}
export { DefaultPageTmpl }
