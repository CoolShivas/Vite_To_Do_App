import { FaRegEdit } from "react-icons/fa";
import { useContext } from "react";
import { IoCloseCircle } from "react-icons/io5";
import ToDoContext from "../store/ToDoContext";

const ToDoLists = ({ idABC, arrABC }) => {

    const { subtraction, editing } = useContext(ToDoContext);

    return (

        <li>
            <div className="todo_style">
                <div className="arrangement">
                    {arrABC}
                </div>
                <div className="icons">
                    <IoCloseCircle className="cross_icon" onClick={() => { subtraction(idABC) }} />
                    <FaRegEdit className="cross_icon" onClick={() => { editing(idABC) }} />
                </div>
            </div>
        </li>

    )
}

export default ToDoLists;