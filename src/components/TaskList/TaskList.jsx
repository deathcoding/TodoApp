import Task from "../Task/Task";
import PropTypes from "prop-types";
import "./TaskList.css";

function TaskList({
  todoItems = [{ text: "create todoApp", id: 1, edit: false, done: false }],
  onAdded,
  onDeleted,
  onToggleDone,
  onEditTask,
  onSaveEditableTask,
}) {
  const elements = todoItems.map((item) => {
    const { id, ...taskItems } = item;

    return (
      <Task
        taskItems={taskItems}
        key={id}
        id={id}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onEditTask={() => onEditTask(id)}
        onAdded={onAdded}
        onSaveEditableTask={onSaveEditableTask}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}

TaskList.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      edit: PropTypes.bool.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onSaveEditableTask: PropTypes.func.isRequired,
  onAdded: PropTypes.func.isRequired,
};

export default TaskList;
