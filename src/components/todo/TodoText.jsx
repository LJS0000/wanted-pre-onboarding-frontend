export default function TodoText({
  updateTodo,
  list,
  toggle,
  modify,
  setModify,
  updateDone,
}) {
  return (
    <lable>
      <input
        type='checkbox'
        onChange={e => e.target.checked}
        checked={list.isCompleted}
        onClick={() => updateDone(list)}
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
        />
      )}
    </lable>
  )
}
