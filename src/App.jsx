
import { useLocalStorage } from "./components/Hooks/localStorage";
import { AppUI } from "./AppUI";
import React from "react";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, saveLocalStorage] = useLocalStorage("V1", []);

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
    <AppUI
    
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    completeTodo={completeTodo}
    deleteTodo={completeTodo}
    searchingTodos={searchingTodos}
    />
  );
}

export default App;
