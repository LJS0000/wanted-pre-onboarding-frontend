import { createContext, useState } from 'react'
import Router from './shared/Router'

const AuthContext = createContext()
function App() {
  const access_token = localStorage.getItem('access_token')

  const [isLog, setIsLog] = useState(false)

  if (access_token) {
    setIsLog(true)
  } else {
    setIsLog(false)
  }

  return (
    <AuthContext.Provider value={isLog}>
      <Router />
    </AuthContext.Provider>
  )
}

export default App
