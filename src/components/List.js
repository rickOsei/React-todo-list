import React, { useState } from "react";

function List({ allTask, deleteTask }) {
  return (
    <ul className="task_section">
      {allTask.map(({ Task, id }) => {
        return (
          <RenderedList key={id} deleteTask={deleteTask} Task={Task} id={id} />
        );
      })}
    </ul>
  );
}

const RenderedList = ({ deleteTask, Task, id }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const completedFunc = () => {
    setIsCompleted((prev) => !prev);
  };

  const deletedFunc = () => {
    setIsDeleted(true);

    setTimeout(() => {
      deleteTask(id);
    }, 1500);
  };

  return (
    <>
      <li className={isDeleted ? "move task" : "task"}>
        <p className={isCompleted ? "completed task_name" : "task_name"}>
          {Task}
        </p>

        <div className="task_btn">
          <i className="fa-solid fa-pen-to-square" onClick={completedFunc}></i>
          <i className="fa-solid fa-trash-can" onClick={deletedFunc}></i>
        </div>
      </li>
    </>
  );
};

export default List;
