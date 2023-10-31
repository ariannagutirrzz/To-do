import { TodoCounter } from "./components/TodoElements/TodoCounter";
import { TodoSearch } from "./components/TodoElements/TodoSearch";
import { TodoList } from "./components/Task/TodoList";
import { TodoItem } from "./components/Task/TodoItem";
import { CreateButton } from "./components/Buttons/CreateButton";

import React from "react";
import "./App.css";

function useLocalStorage(itemName,initialValue) { 

  const localStorageItem = localStorage.getItem(itemName);

  let parsed;

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([]));
    parsed = [];
  } else {
    parsed = JSON.parse(localStorageItem)
  }

  const [item,setItem] = React.useState(parsed);  

  const saveLocalStorage = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem)
  }

  return [item,saveLocalStorage];
};

function App() {

  const [searchValue, setSearchValue] = React.useState("");
  const [todos, saveLocalStorage] = useLocalStorage("V1",[]);

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
