import { TodoCounter } from "./components/TodoElements/TodoCounter";
import { TodoSearch } from "./components/TodoElements/TodoSearch";
import { TodoList } from "./components/Task/TodoList";
import { TodoItem } from "./components/Task/TodoItem";
import { CreateButton } from "./components/Buttons/CreateButton";

import './App.css'

const defaultTodos = [
  { text: "Cook", completed: false },
  { text: "Go to the gym", completed: true },
  { text: "Jump the rope", completed: false },
  { text: "Listen to milo j", completed: true },
  { text: "Make money", completed: true },
];

function App() {

  return (
    <>
    <p>egrrdef</p>
     <TodoCounter></TodoCounter>
     <TodoSearch></TodoSearch>

    <TodoList>
      {defaultTodos.map((todo) => 
      <TodoItem
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
      />
      
      )}
    </TodoList>

    <CreateButton />

    </>
  )
}

export default App
