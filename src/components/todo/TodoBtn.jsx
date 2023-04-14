import { useState } from 'react'
import TodoText from './TodoText'

export default function TodoBtn({
  updateTodo,
  list,
  deleteTodo,
  updateDone,
}) {
  const [toggle, setToggle] = useState(true)
  const [modify, setModify] = useState(list.todo)

  return (
    <div style={{ display: 'flex' }}>
      <TodoText
        updateDone={updateDone}
        updateTodo={updateTodo}
        list={list}
        toggle={toggle}
        modify={modify}
        setModify={setModify}
      />
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
            onClick={() => {
              setToggle(true)
              updateTodo(list, modify)
            }}>
            제출
          </button>
          <button data-testid='cancel-button'>취소</button>
        </div>
      )}
    </div>
  )
}
