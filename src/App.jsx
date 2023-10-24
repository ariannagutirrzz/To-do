import { TodoCounter } from "./components/TodoElements/TodoCounter";
import { TodoSearch } from "./components/TodoElements/TodoSearch";
import { TodoList } from "./components/Task/TodoList";
import { TodoItem } from "./components/Task/TodoItem";
import { CreateButton } from "./components/Buttons/CreateButton";

import React from "react";
import "./App.css";

const defaultTodos = [
  { text: "Cook", completed: false },
  { text: "Go to the gym", completed: true },
  { text: "Jump the rope", completed: false },
  { text: "Listen to milo j", completed: true },
  { text: "Make money", completed: true },

];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchingTodos = todos.filter((todo) => {
    const todoText = removeAccents(todo.text.toLowerCase())
    const searchText =  removeAccents(searchValue.toLocaleLowerCase());
    return todoText.includes(searchText);
  });

  function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

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

export default App;
