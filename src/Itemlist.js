function Itemlist({ task, completedItem, deleteItem, isCompleted, isDeleted }) {
  return (
    <>
      <div className="task_section">
        {task.map((item, index) => {
          return (
            <div key={index} className={isDeleted ? `moving task` : "task"}>
              <p className={isCompleted ? `completed task_name` : "task_name"}>
                {item.value}
              </p>

              <div className="task_btn">
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={completedItem}
                ></i>

                <i className="fa-solid fa-trash-can" onClick={deleteItem}></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Itemlist;
