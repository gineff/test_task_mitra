import { DefaultPageTmpl } from '@components/DefaultPageTmpl'
import { Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './ProfilePage.scss'

const ProfilePage = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <DefaultPageTmpl showNav={false} className="profile-page">
      <Navbar expand={false} variant="light" bg="light" className="app-header">
        <Navbar.Toggle
          onClick={() => goBack()}
          className="post-page__button-back"
        />
      </Navbar>
      Profile
    </DefaultPageTmpl>
  )
}

export { ProfilePage }
