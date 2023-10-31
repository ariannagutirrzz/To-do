import { TodoCounter } from "./components/TodoElements/TodoCounter";
import { TodoSearch } from "./components/TodoElements/TodoSearch";
import { TodoList } from "./components/Task/TodoList";
import { TodoItem } from "./components/Task/TodoItem";
import { CreateButton } from "./components/Buttons/CreateButton";

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchingTodos,
    completeTodo,
    deleteTodo
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></TodoSearch>

      <TodoList>
        {searchingTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateButton />
    </>
  );
}

export { AppUI };
