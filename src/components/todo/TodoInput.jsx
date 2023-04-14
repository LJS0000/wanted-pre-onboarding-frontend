import { useState } from 'react'
import axios from '../../axios/axios'

export default function TodoInput() {
  const hexString = Math.floor(Math.random() * 0xffffffff).toString(
    16,
  )
  const randomString = ('00000000' + hexString).slice(-8)
  const timestamp = new Date().getTime()
  const uniqueId = `${randomString}-${timestamp}`
  console.log(uniqueId)

  const [todo, setTodo] = useState({
    id: uniqueId,
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
