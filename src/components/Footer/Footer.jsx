import "./Footer.css";
import TasksFilter from "../TasksFilter/TasksFilter";
import "../TasksFilter/TasksFilter.css";
import PropTypes from "prop-types";

function Footer({ doneCount, onClickFilter, onClear, filter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{doneCount} items left</span>
      <TasksFilter onClickFilter={onClickFilter} filter={filter} />
      <button type="button" className="clear-completed" onClick={() => onClear()}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  doneCount: PropTypes.number.isRequired,
  onClickFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Footer;
