import { Route, Routes, Navigate } from 'react-router-dom'
import { AboutPage } from '@pages/AboutPage'
import { ProfilePage } from '@pages/ProfilePage'
import { PostsPage } from '@pages/PostsPage'
import { ServicePage } from '@pages/ServicePage'
import { ROUTES } from '@constants/routes'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route
          path={ROUTES.ROOT}
          element={<Navigate to={ROUTES.POSTS} replace />}
        />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.POSTS} element={<PostsPage />} />
        <Route
          path="*"
          element={
            <ServicePage
              errorCode={404}
              errorText={'Запрошенная страница не найдена'}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
