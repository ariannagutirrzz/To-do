import React from "react";
import { useLocalStorage } from "../Hooks/localStorage";

const TodoContext = React.createContext();

function Provider({ children }) {
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(true);

    const {
      item: todos, 
      saveLocalStorage,
      loading,
      error,
    } = useLocalStorage("V1", []);
  
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
        <TodoContext.Provider value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchingTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal
        }}>
          {children}
          </TodoContext.Provider>
       
      );
}

export {TodoContext, Provider}
