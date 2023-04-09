import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import SigninPage from '../pages/SigninPage'
import TodoPage from '../pages/TodoPage'
import NotFoundPage from '../pages/NotFoundPage'

export default function Router() {
  const access_token = localStorage.getItem('access_token')

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={access_token ? <TodoPage /> : <SignupPage />} />
        <Route path='/signin' element={access_token ? <TodoPage /> : <SigninPage />} />
        <Route path='/todo' element={access_token ? <TodoPage /> : <SigninPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
