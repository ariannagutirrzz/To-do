import { TodoContext } from "../TodoContext/TodoContext"
import React from "react"

function TodoCounter() { 
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);

    return (
        <h1>
            {completedTodos == totalTodos ? 'You finished all your todos' : `You completed ${completedTodos} of ${totalTodos} todo's`}
        </h1>
    )
}

export { TodoCounter }