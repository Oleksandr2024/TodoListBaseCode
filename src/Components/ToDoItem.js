import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import api from "../api/todosApi";

const ToDoItem = ({ todo, todos, setTodos }) => {
  const { id } = todo;

  const toogleTodo = async (id) => {
    // const allTodos = todos.map((todo) =>
    //   todo.id === id ? { ...todo, completed: !todo.completed } : todo
    // );
    // setTodos(allTodos);           => if without API
    const updatedTodo = {
      id,
      task: todo.task,
      completed: !todo.completed,
    };

    try {
      const response = await api.put(`/todos/${id}`, updatedTodo);
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...response.data } : todo))
      );
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <li className="todo-item" onClick={() => toogleTodo(id)}>
      <input type="checkbox" checked={todo.completed} onChange={() => {}} />
      <span className={todo.completed ? "todo-task completed" : "todo-task"}>
        {todo.task}
      </span>
      <span className="todo-trash" onClick={() => deleteTodo(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  );
};

export default ToDoItem;
