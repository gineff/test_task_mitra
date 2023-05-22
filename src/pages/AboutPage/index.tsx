import DOMPurify from 'dompurify'
import { DefaultPageTmpl } from '@components/DefaultPageTmpl'
import { LoadingStatus } from '@constants/index'
import { useAppSelector } from '@hooks/redux_typed_hooks'
import { selectCurretnUser } from '@store/selectors'
import { Spinner } from 'react-bootstrap'
import { Avatar } from '@components/Avatar'
import './Aboutpage.scss'

const AboutPage = () => {
  const {
    loadingStatus,
    data: { about, avatar },
  } = useAppSelector(selectCurretnUser)

  const avatarStyle: React.CSSProperties = {
    outline: '10px solid #f8f9fa87',
    position: 'relative',
    top: '-75px',
  }
  const sinizedHTML = DOMPurify.sanitize(about as string)
  return (
    <DefaultPageTmpl className="about-page">
      {loadingStatus === LoadingStatus.Succeeded ? (
        <div className="about p-4 pt-0">
          <div className="about__avatar-container">
            <Avatar size="large" style={avatarStyle} image={avatar as string} />
          </div>
          <div
            className="about__content"
            dangerouslySetInnerHTML={{
              __html: sinizedHTML,
            }}></div>
        </div>
      ) : loadingStatus === LoadingStatus.Loading ? (
        <Spinner animation="grow" variant="light" className="m-4 p-4" />
      ) : (
        <span>Ошибка загрузки</span>
      )}
    </DefaultPageTmpl>
  )
}

export { AboutPage }
