import { useState } from 'react'
import axios from '../../axios/axios'

export default function TodoInput() {
  const timestamp = new Date().getTime()

  const [todo, setTodo] = useState({
    id: timestamp,
    todo: '과제하기',
    isCompleted: false,
    userId: localStorage.getItem('userId'),
  })

  const createTodo = async e => {
    e.preventDefault()

    try {
      await axios.post('/todos', todo)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form>
      <input
        data-testid='new-todo-input'
        onChange={e => createTodo(e.target.value)}
      />
      <button data-testid='new-todo-add-button'>추가</button>
    </form>
  )
}
