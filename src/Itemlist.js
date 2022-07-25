import React, { useState } from "react";

function Itemlist({ task }) {
  return (
    <>
      <div className="task_section">
        {task.map((item, index) => {
          return <RenderedList item={item} key={index} />;
        })}
      </div>
    </>
  );
}

function RenderedList({ item }) {
  const [isCompleted, setIsCompleted] = useState(false);

  function completedItem() {
    setIsCompleted(!isCompleted);
  }

  const [isDeleted, setIsDeleted] = useState(false);
  function deleteItem(id) {
    // let newArray = task.filter((item) => item.id !== id);
    // setTask(newArray);
    // // if (e.target.classNameList.contains("fa-trash-can")) {
    // if (taskTitle.classNameList.contains("completed")) {
    //   mainTask.classNameList.add("move");
    // } else {
    //   mainTask.classNameList.add("moving");
    // }
    setIsDeleted((current) => !current);
    // setTimeout(() => {
    //   mainTask.remove();
    // }, 1000);
    // }
  }

  return (
    <div className={isDeleted ? `move task` : "task"}>
      <p className={isCompleted ? `completed task_name` : "task_name"}>
        {item.value}
      </p>

      <div className="task_btn">
        <i className="fa-solid fa-pen-to-square" onClick={completedItem}></i>

        <i className="fa-solid fa-trash-can" onClick={deleteItem}></i>
      </div>
    </div>
  );
}

export default Itemlist;
