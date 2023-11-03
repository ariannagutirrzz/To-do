import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "../../styles/modal-styles.css";
function Form() {
  const { 
    addTodo,
    setOpenModal,
   } = React.useContext(TodoContext);

   const[newTodoUser, setNewTodoUser] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoUser);
    setOpenModal(false)
  };

  const onCancel = () => {
    setOpenModal(false)
  };

  const onChange = (event) => {
    setNewTodoUser(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Type your new todo</label>
      <textarea placeholder="something" value={newTodoUser} onChange={onChange}>

      </textarea>

      <div className="buttons-container">

        <button type="submit" className="button" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit" className="button">
          Add
        </button>

      </div>
    </form>
  );
}

export { Form };
