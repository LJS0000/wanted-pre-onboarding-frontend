export default function TodoList({ lists }) {
  return (
    <ul>
      {lists?.map(list => {
        return (
          <li key={list.id}>
            <label>
              <input type='checkbox' />
              <span>{list.todo}</span>
            </label>
            <button data-testid='modify-button'>수정</button>
            <button data-testid='delete-button'>삭제</button>
          </li>
        )
      })}
    </ul>
  )
}
