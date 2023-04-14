import { useContext, useState } from 'react'
import { AuthContext } from '../App'
import axios from '../axios/axios'
import AuthForm from '../components/auth/AuthForm'

export default function SigninPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const { setIsLog } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post('/auth/signin', {
        email,
        password,
      })
      const access_token = response.data.access_token

      localStorage.setItem('access_token', access_token)
      setIsLog(true)
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
