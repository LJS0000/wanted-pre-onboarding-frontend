// SignupPage.js
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from '../axios/axios'
import AuthForm from '../components/auth/AuthForm'

export default function SignupPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('/auth/signup', {
        email,
        password,
      })
      alert('회원가입 완료. 로그인 페이지로 이동합니다.')
      navigate('/signin')
    } catch (error) {
      console.log(error)
      setErrorMessage('회원가입 중 오류가 발생하였습니다. 다시 시도해주세요.')
    }
  }

  return (
    <AuthForm
      onSubmit={handleSubmit}
      setEmail={setEmail}
      setPassword={setPassword}
      email={email}
      password={password}
      errorMessage={errorMessage}
      buttonText='회원가입'
    />
  )
}
