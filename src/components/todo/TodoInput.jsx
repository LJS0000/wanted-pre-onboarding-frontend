import { useState } from 'react'
import axios from '../../axios/axios'

export default function TodoInput() {
  const timestamp = new Date().getTime()

  const [text, setText] = useState('')

  const todo = {
    id: timestamp,
    todo: text,
    isCompleted: false,
    userId: localStorage.getItem('userId'),
  }

  const createTodo = async e => {
    e.preventDefault()

    try {
      await axios.post('/todos', todo)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={createTodo}>
      <input
        data-testid='new-todo-input'
        onChange={e => setText(e.target.value)}
      />
      <button data-testid='new-todo-add-button'>추가</button>
    </form>
  )
}
