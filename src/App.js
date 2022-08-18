import "./App.css";
// import TodoList from "./Todolist";
import Task from "./components/Task";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [allTask, setAllTask] = useState([]);

  const addItems = (items) => {
    setAllTask((prev) => [...prev, items]);
  };

  // setup delete functions

  const deleteTask = (id) => {
    setAllTask((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <Task addItems={addItems} />
          <List allTask={allTask} deleteTask={deleteTask} />
        </div>
      </div>
    </>
  );
}

export default App;
