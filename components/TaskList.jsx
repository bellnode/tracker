import TaskItem from './TaskItem'

function TaskList({ tasks, onDelete, onToggle }) {
return (
    <div>
    {tasks.length == 0 ? (
        <p>No tasks yet!</p>
    ) : (
        tasks.map(task => (
        <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
        />
        ))
    )}
    </div>
)
}

export default TaskList
