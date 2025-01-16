import PropTypes from 'prop-types';

const TodoItem = ({ task }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={task.completed} />
        {task.name}
      </label>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
