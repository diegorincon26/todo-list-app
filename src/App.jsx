import { useState } from 'react'
import TodoList from './components/TodoList'
import AddTaskForm from './components/AddTaskForm'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className='App'>
      <h1>Lista de Tareas</h1>
      <AddTaskForm onAddTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  )
}

export default App;
