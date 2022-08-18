// import React, { useState } from "react";
// import Itemlist from "./Itemlist";

// const TodoList = () => {
//   const [inputVal, setInputVal] = useState("");
//   const [task, setTask] = useState([]);

//   // states for adding classes
//   const [isActive, setIsActive] = useState(false);

//   let addButton = document.querySelector(".btn_add");
//   let taskTitle = document.querySelector(".task_name");
//   let mainTask = document.querySelector(".task");

//   // Helper Functions

//   const handleChange = (e) => {
//     setInputVal(e.target.value);
//   };

//   const addItem = () => {
//     if (!inputVal) {
//       return;
//     }

//     const item = {
//       value: inputVal,
//     };
//     setTask((prev) => {
//       return [...prev, item];
//     });

//     setInputVal("");
//   };

//   function active() {
//     setIsActive(true);
//   }

//   return (
//     <>
//       <div className="main">
//         <h2>ToDo List</h2>
//         <div className="container">
//           <div className="input_section">
//             <input
//               type="text"
//               placeholder="Add Items.."
//               value={inputVal}
//               onChange={handleChange}
//               onKeyUp={active}
//             />
//             <button
//               className={isActive ? `active btn_add` : "btn_add"}
//               onClick={addItem}
//             >
//               Add
//             </button>
//           </div>

//           <Itemlist task={task} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default TodoList;
