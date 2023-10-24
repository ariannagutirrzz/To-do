import { FaCheck } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc"

function TodoItem(props) {
    return (
        <li className={`item ${props.completed && "item task-completed"}`}>

        <div className="icon-container">
            <FaCheck className="icon check" onClick={props.onComplete}/>
        </div>

        <p>{props.text}</p>

        <div className="icon-container">
            <VscChromeClose className="right-icon icon closed" onClick={props.onDelete}/>
        </div>

        </li>
    )
}

export { TodoItem }