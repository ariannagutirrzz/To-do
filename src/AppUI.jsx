import { TodoCounter } from "./components/TodoElements/TodoCounter";
import { TodoSearch } from "./components/TodoElements/TodoSearch";
import { TodoList } from "./components/Task/TodoList";
import { TodoItem } from "./components/Task/TodoItem";
import { CreateButton } from "./components/Buttons/CreateButton";
import { NoTodos } from "./components/NoTodos";

function AppUI({
    loading,
    error,
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
        {loading && <NoTodos/>}
        {error && <p>error</p>}
        {(!loading && searchingTodos.length === 0) && <p>hola</p>}
        {searchingTodos.length <= 0 ? <p>CREATE YOUR FIRST TODO</p>: searchingTodos.map((todo) => (
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
