import { IoCloseCircle } from "react-icons/io5";

const ToDoLists = ({ arrABC }) => {

    return (
        <div className="todo_style">
            <li>
                <IoCloseCircle className="cross_icon" />
                {arrABC}
            </li>
        </div>
    )
}

export default ToDoLists;