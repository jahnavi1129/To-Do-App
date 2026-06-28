function TodoItem({ task, deleteTask, editTask, toggleComplete }) {
  return (
<div className="todo-item">
    <div className="task-info">
        <h3
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "green" : "#333",
          }}
        >
        {task.text}
        </h3>
        <p>
        Status:
        <strong>
        {task.completed ? " ✅ Completed" : " ⏳ Pending"}
        </strong>
        </p>
    </div>

    <div className="task-buttons">
    <button
    className="complete-btn"
    onClick={() => toggleComplete(task.id)}
    >
    {task.completed ? "Undo" : "Complete"}
    </button>

    <button
    className="edit-btn"
    onClick={() => editTask(task.id)}
    >
    Edit
    </button>
    <button
    className="delete-btn"
    onClick={() => deleteTask(task.id)}
    >
    Delete
    </button>
    </div>
    </div>
  );
}

export default TodoItem;