import { useContext } from "react";
import { IoCloseCircle } from "react-icons/io5";
import ToDoContext from "../store/ToDoContext";

const ToDoLists = ({ idABC, arrABC }) => {

    const { subtraction } = useContext(ToDoContext);

    return (
        <div className="todo_style">
            <li>
                <IoCloseCircle className="cross_icon" onClick={() => { subtraction(idABC) }} />
                {arrABC}
            </li>
        </div>
    )
}

export default ToDoLists;