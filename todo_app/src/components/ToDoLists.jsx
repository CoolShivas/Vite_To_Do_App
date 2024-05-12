import { FaRegEdit } from "react-icons/fa";
import { useContext } from "react";
import { IoCloseCircle } from "react-icons/io5";
import ToDoContext from "../store/ToDoContext";

const ToDoLists = ({ idABC, arrABC }) => {

    const { subtraction, editing } = useContext(ToDoContext);

    return (
        <div className="todo_style">
            <li>
                {arrABC}
                <IoCloseCircle className="cross_icon" onClick={() => { subtraction(idABC) }} />
                <FaRegEdit className="cross_icon" onClick={() => { editing(idABC) }} />
            </li>
        </div>
    )
}

export default ToDoLists;