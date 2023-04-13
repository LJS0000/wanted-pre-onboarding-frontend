import { useState } from 'react'

export default function TodoInput() {
  const [inputText, setInputText] = useState({
    id: 0,
    todo: '',
    isCompleted: false,
    userId: 1,
  })
  return (
    <div>
      <input data-testid='new-todo-input' />
      <button data-testid='new-todo-add-button'>추가</button>
    </div>
  )
}
