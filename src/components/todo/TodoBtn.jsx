import { useState } from 'react'
import TodoText from './TodoText'

export default function TodoBtn({ updateTodo, list, deleteTodo }) {
  const [toggle, setToggle] = useState(true)

  return (
    <div style={{ display: 'flex' }}>
      <TodoText updateTodo={updateTodo} list={list} toggle={toggle} />
      {toggle ? (
        <div>
          <button
            data-testid='modify-button'
            onClick={() => setToggle(false)}>
            수정
          </button>
          <button
            data-testid='delete-button'
            onClick={() => deleteTodo(list)}>
            삭제
          </button>
        </div>
      ) : (
        <div>
          <button
            data-testid='submit-button'
            onClick={() => setToggle(true)}>
            제출
          </button>
          <button data-testid='cancel-button'>취소</button>
        </div>
      )}
    </div>
  )
}
