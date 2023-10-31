import { TodoCounter } from "./components/TodoElements/TodoCounter";
import { TodoSearch } from "./components/TodoElements/TodoSearch";
import { TodoList } from "./components/Task/TodoList";
import { TodoItem } from "./components/Task/TodoItem";
import { CreateButton } from "./components/Buttons/CreateButton";

import React from "react";
import "./App.css";

// const defaultTodos = [
//   { text: "Cook", completed: false},
//   { text: "Go to the gym", completed: true },
//   { text: "Jump the rope", completed: false },
//   { text: "Listen to milo j", completed: true },
//   { text: "Make money", completed: true },
// ];

// localStorage.setItem("V1", JSON.stringify(defaultTodos));

function App() {

  const localStorageTodos = localStorage.getItem("V1");
  let parsed;

  if(!localStorageTodos) {
    localStorage.setItem("V1", JSON.stringify([]));
    parsed = [];
  } else {
    parsed = JSON.parse(localStorageTodos)
  }

  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(parsed);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchingTodos = todos.filter((todo) => {
    const todoText = removeAccents(todo.text.toLowerCase());
    const searchText = removeAccents(searchValue.toLocaleLowerCase());
    return todoText.includes(searchText);
  });

  function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const saveLocalStorage = (newTodos) => {
    localStorage.setItem("V1", JSON.stringify(newTodos));

    setTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);

    let completed = newTodos[todoIndex].completed;
    newTodos[todoIndex].completed = !completed;
    saveLocalStorage(newTodos);
   
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveLocalStorage(newTodos);
  };

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
