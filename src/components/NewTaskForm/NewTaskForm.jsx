import "./NewTaskForm.css";
import PropTypes from "prop-types";
import { useState } from "react";

function NewTaskForm({ onAdded }) {
  const [inputState, setInputState] = useState({ text: "" });

  function inputChange(event) {
    setInputState({ text: event.target.value });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      onAdded(inputState.text);
      setInputState({ text: "" });
    }
  }

  return (
    <input
      className="new-todo"
      autoFocus
      value={inputState.text}
      placeholder="What needs to be done?"
      onChange={inputChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export default NewTaskForm;

NewTaskForm.propTypes = {
  onAdded: PropTypes.func.isRequired,
};
