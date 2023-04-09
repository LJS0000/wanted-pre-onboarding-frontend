import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import SigninPage from '../pages/SigninPage'
import TodoPage from '../pages/TodoPage'
import NotFoundPage from '../pages/NotFoundPage'

export default function Router() {
  const access_token = localStorage.getItem('access_token')
  console.log(access_token)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/signup'
          element={
            access_token ? (
              <Navigate to='/todo' replace={true} />
            ) : (
              <SignupPage />
            )
          }
        />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
