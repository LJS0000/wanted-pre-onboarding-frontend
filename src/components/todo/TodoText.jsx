import { useState } from 'react'

export default function TodoText({ updateTodo, list, toggle }) {
  const [modify, setModify] = useState(list.todo)

  return (
    <lable>
      <input
        type='checkbox'
        onChange={e => e.target.checked}
        checked={list.isCompleted}
        onClick={() => updateTodo(list, modify)}
      />
      {toggle ? (
        <span style={{ margin: ' 0 5px' }}>{list.todo}</span>
      ) : (
        <input
          data-testid='modify-input'
          value={modify}
          onChange={e => {
            setModify(e.target.value)
          }}
          onClick={() => updateTodo(list, modify)}
        />
      )}
    </lable>
  )
}
