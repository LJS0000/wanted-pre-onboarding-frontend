import { useEffect, useState } from 'react'
import axios from '../../axios/axios'

export default function TodoList() {
  const [list, setList] = useState([])

  useEffect(() => {
    const response = axios.get('/todos')
    setList(response)
  }, [])

  console.log(list)

  return (
    <ul>
      <li>
        <label>
          <input type='checkbox' />
          <span>TODO 1</span>
        </label>
      </li>
      <li>
        <label>
          <input type='checkbox' />
          <span>TODO 1</span>
        </label>
        <button data-testid='modify-button'>수정</button>
        <button data-testid='delete-button'>삭제</button>
      </li>
    </ul>
  )
}
