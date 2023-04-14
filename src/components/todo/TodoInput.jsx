export default function TodoInput({ setTodo, createTodo }) {
  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          data-testid='new-todo-input'
          onChange={e => setTodo(e.target.value)}
        />
        <button data-testid='new-todo-add-button'>추가</button>
      </form>
    </div>
  )
}
