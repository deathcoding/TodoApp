import PropTypes from "prop-types";
import "./Task.css";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

function Task({
  taskItems = { text: "create todoApp", id: 1, edit: false, done: false },
  onDeleted,
  onToggleDone,
  onEditTask,
  onSaveEditableTask,
  id,
}) {
  const { text, done, edit } = taskItems;

  let className = null;

  let inputForEdit;

  const [inputState, setInputState] = useState({ text });

  function inputChange(event) {
    setInputState({ text: event.target.value });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      onSaveEditableTask(id, inputState.text);
    }
  }

  const taskCreationTime = formatDistanceToNow(new Date(), {
    includeSeconds: true,
  });

  if (done) {
    className = "completed";
  }

  if (edit) {
    className = "editing";
    inputForEdit = (
      <input
        autoFocus
        type="text"
        className="edit"
        value={inputState.text}
        onChange={inputChange}
        onKeyDown={handleKeyDown}
      />
    );
  }

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done} />
        <label>
          <span
            className="description"
            onClick={onToggleDone}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? onToggleDone() : " ")}
          >
            {text}
          </span>
          <span className="created">created {taskCreationTime} ago</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={onEditTask} aria-label="Edit task" />
        <button type="button" className="icon icon-destroy" onClick={onDeleted} aria-label="Delete Task" />
      </div>
      {inputForEdit}
    </li>
  );
}

Task.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onSaveEditableTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  taskItems: PropTypes.shape({
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    edit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Task;
