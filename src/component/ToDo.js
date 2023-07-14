import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDo = () => {
  const [taskData, setTaskData] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const onAddHandler = (taskInput) => {
    let temp = [...taskData];
    let newTask = { task: taskInput, id: uuidv4() };
    temp.unshift(newTask);
    setTaskData(temp);
    setTaskInput("");
  };
  const deleteHandler = (index) => {
    let temp = [...taskData];
    temp = temp.filter((a, i) => a.id !== index);
    setTaskData(temp);
  };

  return (
    <div className="toDo_container">
      <h1 className="primary__heading">Todo</h1>
      <div className="task__container">
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="add__button" onClick={() => onAddHandler(taskInput)}>
          Add
        </button>
      </div>
      <div className="render__container">
        {" "}
        {taskData?.map((data, index) => (
          <div className="inside__render" key={data.id}>
            {" "}
            <div className="render__task">{data?.task}</div>{" "}
            <button
              className="delete__btn"
              onClick={() => deleteHandler(data.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
