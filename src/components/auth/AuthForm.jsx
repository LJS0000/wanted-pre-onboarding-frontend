// AuthForm.js
import React, { useMemo } from 'react'

const AuthForm = ({ onSubmit, setEmail, setPassword, email, password, errorMessage }) => {
  // 이메일 유효성 검증 함수
  const validateEmail = email => {
    return email.includes('@')
  }

  // 패스워드 유효성 검증 함수
  const validatePassword = password => {
    return password.length >= 8
  }

  // 이메일과 패스워드가 유효한지 검사하는 함수
  const isValid = useMemo(() => {
    return validateEmail(email) && validatePassword(password)
  }, [email, password])

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='email'>Email:</label>
        <input data-testid='email-input' id='email' onChange={e => setEmail(e.target.value)} value={email} />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          data-testid='password-input'
          type='password'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <p>{errorMessage}</p>
      <button disabled={!isValid}>제출</button>
    </form>
  )
}

export default AuthForm
