import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './ServicePage.scss'

type ServicePageProps = {
  errorCode: number
  errorText: string
}

function ServicePage({ errorCode, errorText }: ServicePageProps) {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <main className="d-flex justify-content-center vh-100 service-page">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-1">{errorCode}</h1>
        <p>{errorText}</p>
        <div>
          <Button
            variant="primary"
            onClick={() => goBack()}
            className="mb-1 me-2">
            Вернуться назад
          </Button>
          <Link to="/">
            <Button as="span" variant="outline-primary" className="mb-1">
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export { ServicePage }
