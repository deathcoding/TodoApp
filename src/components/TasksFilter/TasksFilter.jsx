import "./TasksFilter.css";
import PropTypes from "prop-types";

function TasksFilter({ onClickFilter, filter }) {
  return (
    <ul className="filters">
      <span>
        <button type="button" className={filter === "All" ? "selected" : null} onClick={() => onClickFilter("All")}>
          All
        </button>
      </span>
      <span>
        <button
          type="button"
          className={filter === "Active" ? "selected" : null}
          onClick={() => onClickFilter("Active")}
        >
          Active
        </button>
      </span>
      <span>
        <button
          type="button"
          className={filter === "Completed" ? "selected" : null}
          onClick={() => onClickFilter("Completed")}
        >
          Completed
        </button>
      </span>
    </ul>
  );
}

TasksFilter.propTypes = {
  onClickFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TasksFilter;
