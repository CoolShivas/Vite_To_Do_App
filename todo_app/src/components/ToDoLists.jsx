import { IoCloseCircle } from "react-icons/io5";

const ToDoLists = ({ arrABC }) => {

    const handlerOnCrossIcon = () => {
        console.log('cross btn clicked');
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