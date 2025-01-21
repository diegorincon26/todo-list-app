import PropTypes from 'prop-types';
import { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() === '') {
      return;
    }

    onAddTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-5">
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-1 px-3 py-2 border border-gray-300 rounded mr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 "
      ></input>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Agregar
      </button>
    </form>
  );
};

AddTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
