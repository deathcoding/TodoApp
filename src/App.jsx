import "./App.css";
import Header from "./components/Header/Header";
import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

var a;
console.log('foo');

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const [filter, setFilter] = useState("All");

  function deleteTask(id) {
    setTodoItems(todoItems.filter((task) => task.id !== id));
  }

  function addTask(text) {
    if (text.trim() === "") return;

    const newTask = {
      text,
      id: Math.random().toString(36).slice(2),
      done: false,
      edit: false,
    };

    setTodoItems([...todoItems, newTask]);
  }

  function onToggleDone(id) {
    setTodoItems(
      todoItems.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      }),
    );
  }

  function onEditTask(id) {
    setTodoItems(
      todoItems.map((item) => {
        if (item.id === id) {
          return { ...item, edit: !item.edit };
        }
        return item;
      }),
    );
  }

  function onSaveEditableTask(id, newText) {
    if (newText.trim() === "") return;
    setTodoItems(
      todoItems.map((item) => {
        if (item.id === id) {
          return { ...item, edit: !item.edit, text: newText };
        }
        return item;
      }),
    );
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  const filteredTasks = todoItems.filter((task) => {
    if (filter === "All") {
      return true;
    }
    if (filter === "Active") {
      return !task.done;
    }
    if (filter === "Completed") {
      return task.done;
    }

    return false;
  });

  function clearCompleted() {
    setTodoItems(todoItems.filter((task) => task.done === false));
  }

  const doneCount = todoItems.filter((item) => !item.done).length;

  return (
    <section className="todoapp">
      <Header />
      <NewTaskForm onAdded={addTask} />
      <section className="main">
        <TaskList
          todoItems={filteredTasks}
          onDeleted={deleteTask}
          onToggleDone={onToggleDone}
          onEditTask={onEditTask}
          onSaveEditableTask={onSaveEditableTask}
          onAdded={addTask}
        />
        <Footer doneCount={doneCount} onClickFilter={handleFilterChange} filter={filter} onClear={clearCompleted} />
      </section>
    </section>
  );
}

export default App;
