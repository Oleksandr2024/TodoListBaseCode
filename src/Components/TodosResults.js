const TodosResults = ({ todos }) => {
  const checkedTodos = todos.filter((todo) => todo.completed === true).length;
  console.log(checkedTodos);

  return (
    <div className="todosResults">
      {checkedTodos > 0 &&
        `You have ${checkedTodos} made todo${checkedTodos > 1 ? "s" : ""} `}
    </div>
  );
};

export default TodosResults;
