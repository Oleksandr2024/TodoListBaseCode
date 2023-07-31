import { useEffect, useState } from "react";
import NewTodoSection from "./NewTodoSection";
import ToDoItem from "./ToDoItem";
import TodosResults from "./TodosResults";
import api from "../api/todosApi";

const ToDoLIst = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/todos");
        setTodos(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  const renderedTodos = todos.map((todo) => {
    return (
      <ToDoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
    );
  });

  return (
    <main>
      <NewTodoSection todos={todos} setTodos={setTodos} />
      <ul>{renderedTodos}</ul>
      <TodosResults todos={todos} />
    </main>
  );
};

export default ToDoLIst;
