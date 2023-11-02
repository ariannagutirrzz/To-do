
import React from "react";

import { TodoCounter } from "./components/TodoElements/TodoCounter";
import { TodoSearch } from "./components/TodoElements/TodoSearch";
import { TodoList } from "./components/Task/TodoList";
import { TodoItem } from "./components/Task/TodoItem";
import { CreateButton } from "./components/Buttons/CreateButton";
import { LoadingScreen } from "./components/TodoElements/LoadingScreen";
import { ErrorScreen } from "./components/TodoElements/ErrorScreen";
import { CreateTodo } from "./components/TodoElements/CreateTodo";
import { TodoContext } from "./components/TodoContext/TodoContext";
import { Modal } from "./components/Modal/Modal";

function AppUI() {
  const {
    loading,
    error,
    searchingTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {loading && <LoadingScreen/>}
        {error && <ErrorScreen/>}
        {!loading && searchingTodos.length === 0 ? <CreateTodo/>: searchingTodos.map((todo) => (
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

      {openModal && (
        <Modal>AGREGAR TODOS</Modal>
      )}
    </>
  );

}
 
export { AppUI };
