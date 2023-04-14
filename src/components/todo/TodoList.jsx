import TodoBtn from './TodoBtn'

export default function TodoList({
  lists,
  updateTodo,
  deleteTodo,
  updateDone,
}) {
  return (
    <ul>
      {lists?.map(list => {
        return (
          <li key={list.id}>
            <TodoBtn
              updateTodo={updateTodo}
              list={list}
              deleteTodo={deleteTodo}
              updateDone={updateDone}
            />
          </li>
        )
      })}
    </ul>
  )
}
