import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { useContext } from 'react'
import { AuthContext } from '../App'
import setToken from '../axios/setToken'

import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import SigninPage from '../pages/SigninPage'
import TodoPage from '../pages/TodoPage'
import NotFoundPage from '../pages/NotFoundPage'

export default function Router() {
  const { isLog } = useContext(AuthContext)

  if (isLog) {
    setToken(localStorage.getItem('access_token'))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/signup'
          element={isLog ? <Navigate to='/todo' /> : <SignupPage />}
        />
        <Route
          path='/signin'
          element={isLog ? <Navigate to='/todo' /> : <SigninPage />}
        />
        <Route
          path='/todo'
          element={isLog ? <TodoPage /> : <Navigate to='/signin' />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
