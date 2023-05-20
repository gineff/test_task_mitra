import { Route, Routes, Navigate } from 'react-router-dom'
import { AboutPage } from '@pages/AboutPage'
import { ProfilePage } from '@pages/ProfilePage'
import { PostsPage } from '@pages/PostsPage'
import { ROUTES } from '@constants/routes'
import './App.scss'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route
            path={ROUTES.ROOT}
            element={<Navigate to={ROUTES.POSTS} replace />}
          />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.POSTS} element={<PostsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
