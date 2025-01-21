import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">
        Lista de Tareas
      </h1>
      <AddTaskForm onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onToggle={toggleTaskCompletion}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
