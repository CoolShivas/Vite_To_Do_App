import { createContext, useState } from "react";

const ToDoContext = createContext();


export const ToDoCtxProvider = (props) => {

    const [textInput, setTextInput] = useState('');

    const [itemsArray, setItemsArray] = useState([]);


    const handlerOnAddBtn = () => {
        if (!textInput) {
            alert("Please enter something.");
        }
        else {
            setItemsArray([...itemsArray, textInput]);
        }
        setTextInput('');
    };

    const handlerOnDelBtn = (idABC) => {
        const updatedArray = itemsArray.filter((currElem, index) => {
            return index !== idABC;
        })
        setItemsArray(updatedArray);
    };

    const handlerOnRemoveAll = () => {
        setItemsArray([]);
    };

    const taskValues = {
        textInput: textInput,
        setTextInput: setTextInput,
        itemsArray: itemsArray,
        addition: handlerOnAddBtn,
        subtraction: handlerOnDelBtn,
        removeAll: handlerOnRemoveAll,
    };


    return <ToDoContext.Provider value={taskValues}>
        {props.children}
    </ToDoContext.Provider>
};


export default ToDoContext;