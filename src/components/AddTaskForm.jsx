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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      ></input>
      <button type="submit">Agregar</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
