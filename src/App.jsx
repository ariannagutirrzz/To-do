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




  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( 
      (todo) => todo.text == text
    );

    let completed = newTodos[todoIndex].completed;
    newTodos[todoIndex].completed = !completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( 
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }

  return (
    <>
     <TodoCounter completed={completedTodo} total={totalTodos}/>
     <TodoSearch></TodoSearch>

    <TodoList>
      {defaultTodos.map((todo) => 
      <TodoItem
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text)}
      onDelete={() => deleteTodo(todo.text)}

      />
      )}
    </TodoList>

    <CreateButton />

    </>
  )
}

export default App
