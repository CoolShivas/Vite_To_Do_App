import { IoCloseCircle } from "react-icons/io5";

const ToDoLists = ({ arrABC, handlerOnDelBtnABC, idABC }) => {

    const handlerOnCrossIcon = () => {
        handlerOnDelBtnABC(idABC);
        // Getting the idABC as props from the itemsArray.map((arr, index) especially from the index present in it;
        // Therefore, here we are providing the idABC to onClick handler to perform function while clicking on IoTabletLandscape;
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