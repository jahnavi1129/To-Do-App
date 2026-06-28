import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    if (editId) {
      setTasks(
        tasks.map((item) =>
          item.id === editId ? { ...item, text: task } : item
     )
);
 setEditId(null);
 } else {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };

    setTasks([...tasks, newTask]);
}
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const editTask = (id) => {
    const currentTask = tasks.find((item) => item.id === id);

    setTask(currentTask.text);
    setEditId(id);
  };

  const toggleComplete = (id) => {
    setTasks(
       tasks.map((item) =>
        item.id === id
      ? { ...item, completed: !item.completed }
        : item
       )
    );
  };

  return (
<div className="todo-container">
    <h1>📝 To-Do App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
    />

        <button type="submit">
          {editId ? "Update Task" : "Add Task"}
        </button>
      </form>

    <div className="task-list">
    {tasks.length === 0 ? (
        <p>No Tasks Available</p>
        ) : (
        tasks.map((item) => (
         <TodoItem
            key={item.id}
            task={item}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleComplete={toggleComplete}
        />
          ))
        )}
      </div>
    </div>
  );
}

export default Todo;