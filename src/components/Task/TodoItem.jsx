function TodoItem(props) {
    return (
        <li className={`item ${props.completed && "item task-completed"}`}>

        <div className="icon-container">

        </div>

        <p>{props.text}</p>

        <div className="icon-container">

        </div>

        </li>
    )
}

export {TodoItem}