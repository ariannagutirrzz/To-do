import { TodoContext } from "../TodoContext/TodoContext"
import React from "react"

function TodoCounter() { 
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);

    return (
        <h1>
            {completedTodos == totalTodos ? 'TO DO' : `You completed ${completedTodos} of ${totalTodos} todo's`}
        </h1>
    )
}

export { TodoCounter }