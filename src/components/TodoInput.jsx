import { useState } from "react";

function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default TodoInput;