import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import SigninPage from '../pages/SigninPage'
import NotFoundPage from '../pages/NotFoundPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
