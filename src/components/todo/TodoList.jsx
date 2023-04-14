import { useState } from 'react'

export default function TodoList({ lists, updateTodo, deleteTodo }) {
  const [toggle, setToggle] = useState(false)
  return (
    <ul>
      {lists?.map(list => {
        return (
          <li key={list.id}>
            <label>
              <input
                type='checkbox'
                onChange={e => e.target.checked}
                checked={list.isCompleted}
                onClick={() => updateTodo(list)}
              />
              <span style={{ margin: ' 0 5px' }}>{list.todo}</span>
            </label>
            <button data-testid='modify-button'>수정</button>
            <button data-testid='delete-button'>삭제</button>
          </li>
        )
      })}
    </ul>
  )
}
