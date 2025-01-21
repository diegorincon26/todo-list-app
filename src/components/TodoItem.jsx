import PropTypes from 'prop-types';

const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center p-3 bg-gray-100 rounded ${
        task.completed ? 'line-through text-gray-500' : ''
      } `}
    >
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-3"
        />
        {task.name}
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Eliminar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
