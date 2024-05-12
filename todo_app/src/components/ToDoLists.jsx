import { IoCloseCircle } from "react-icons/io5";

const ToDoLists = ({ arrABC, handlerOnDelBtnABC }) => {

    const handlerOnCrossIcon = () => {
        handlerOnDelBtnABC();
    };

    return (
        <div className="todo_style">
            <li>
                <IoCloseCircle className="cross_icon" onClick={handlerOnCrossIcon} />
                {arrABC}
            </li>
        </div>
    )
}

export default ToDoLists;