function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '8px 0',
      }}
    >
      <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>X</button>
    </div>
  )
}

export default TaskItem
