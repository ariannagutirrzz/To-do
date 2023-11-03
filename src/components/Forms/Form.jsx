import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "../../styles/modal-styles.css"
function Form() {
    const {
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Type your new todo</label>
            <textarea placeholder="something"></textarea>
            <div className="buttons-container">
            <button type="submit" className="button">
                Cancel
            </button>

            <button type="submit" className="button">
                Add
            </button>
            </div>
        </form>
    )
}

export { Form }