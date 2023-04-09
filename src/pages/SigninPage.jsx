import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from '../axios/axios'
import AuthForm from '../components/auth/AuthForm'
import setToken from '../axios/setToken'

export default function SigninPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post('/auth/signin', {
        email,
        password,
      })
      localStorage.setItem('access_token', response.data.access_token)
      setToken(response.data.access_token)
      navigate('/todo')
    } catch (error) {
      console.log(error)
      setErrorMessage('아이디, 비밀번호를 다시 한 번 확인해 주세요.')
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
      buttonText='로그인'
    />
  )
}
