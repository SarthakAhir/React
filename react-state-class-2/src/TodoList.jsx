import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["uth ja bhai"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      &nbsp;&nbsp;
      <button onClick={addNewTask}>Add</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
