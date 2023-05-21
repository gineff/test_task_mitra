import { HTMLAttributes, FC } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { ROUTES } from '@constants/routes'
import { Link } from 'react-router-dom'
import { Avatar } from '@components/Avatar'
import { AppHeaderUserInfo } from '@components/AppHeaderUserInfo'

export type AppHeaderProps = HTMLAttributes<HTMLElement> & {
  showNav?: boolean
}

const AppHeader: FC<AppHeaderProps> = ({ showNav = true }) => {
  return showNav ? (
    <Navbar expand={false} variant="light" bg="light" className="app-header">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-flex align-items-start">
          <Nav.Item className="p-2 pt-4 d-flex">
            <Avatar className="app-header__avatar" size="regular" image="" />
            <AppHeaderUserInfo name="Anri" email="canone@inbox.ru" />
          </Nav.Item>
          <Nav.Item className="p-2">
            <Link to={ROUTES.ABOUT}>Обо мне</Link>
          </Nav.Item>
          <Nav.Item className="p-2">
            <Link to={ROUTES.POSTS}>Список постов</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : null
}

export { AppHeader }
