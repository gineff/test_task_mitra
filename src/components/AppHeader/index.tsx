import { HTMLAttributes, FC, useEffect } from 'react'
import { Nav, Navbar, Spinner } from 'react-bootstrap'
import { ROUTES } from '@constants/routes'
import { Link } from 'react-router-dom'
import { Avatar } from '@components/Avatar'
import { AppHeaderUserInfo } from '@components/AppHeaderUserInfo'
import { useAppDispatch, useAppSelector } from '@hooks/redux_typed_hooks'
import { fetchCurrentUser } from '@store/slices/currentUser'
import { selectCurretnUser } from '@store/selectors'
import { LoadingStatus } from '@constants/index'
import './AppHeader.scss'

export type AppHeaderProps = HTMLAttributes<HTMLElement> & {
  showNav?: boolean
}

const AppHeader: FC<AppHeaderProps> = ({ showNav = true }) => {
  const dispatch = useAppDispatch()
  const { data: user, loadingStatus } = useAppSelector(selectCurretnUser)

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [])

  return showNav ? (
    <Navbar expand={false} variant="light" className="app-header">
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="app-header__toggler"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-flex align-items-start text-white">
          <Nav.Item className="p-2 pt-4 d-flex align-items-center">
            <Avatar
              className="app-header__avatar"
              size="regular"
              image={user.avatar}
            />

            {loadingStatus === LoadingStatus.Succeeded ? (
              <AppHeaderUserInfo {...user} />
            ) : loadingStatus === LoadingStatus.Loading ? (
              <Spinner animation="grow" variant="light" className="ms-4 p-2 " />
            ) : (
              <span>Ошибка загрузки</span>
            )}
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
