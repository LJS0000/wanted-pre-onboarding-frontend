import { useState, useEffect } from 'react'
import axios from '../axios/axios'

import TodoInput from '../components/todo/TodoInput'
import TodoList from '../components/todo/TodoList'

export default function TodoPage() {
  const [todo, setTodo] = useState('')
  const [lists, setLists] = useState([])

  const createTodo = async e => {
    e.preventDefault()

    try {
      await axios.post('/todos', { todo: todo })
      axios
        .get('/todos')
        .then(response => {
          setLists(response.data)
        })
        .catch(error => console.log(error))
    } catch (error) {
      console.log(error)
    }
    e.target.reset()
  }

  const updateTodo = async list => {
    const { id, todo, isCompleted } = list
    console.log(!isCompleted)
    try {
      await axios.put(`/todos/${id}`, {
        todo: todo,
        isCompleted: !isCompleted,
      })
      axios
        .get('/todos')
        .then(response => {
          setLists(response.data)
        })
        .catch(error => console.log(error))
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTodo = async e => {
    e.preventDefault()
  }

  useEffect(() => {
    axios
      .get('/todos')
      .then(response => {
        setLists(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <TodoInput setTodo={setTodo} createTodo={createTodo} />
      <TodoList
        lists={lists}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}
