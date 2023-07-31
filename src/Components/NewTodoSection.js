import { useState } from "react";
import api from "../api/todosApi";

function NewTodoSection({ todos, setTodos }) {
  const [newTodoText, setNewTodoText] = useState("");

  const addNewTodo = async () => {
    const newTodo = {
      id: new Date().valueOf(),
      task: newTodoText,
      completed: false,
    };
    try {
      const response = await api.post("/todos", newTodo);
      const allTodos = [...todos, response.data];
      setTodos(allTodos);
      setNewTodoText("");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={(e) => e.preventDefault()}>
        <label></label>
        <input
          className="new-todo-input"
          type="text"
          placeholder="add new todo..."
          name="new-todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="new-todo-button"
          type="button"
          onClick={() => addNewTodo()}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoSection;
